import * as fs from "https://deno.land/std@0.144.0/fs/mod.ts";
// import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts';
import { Marked } from './markdown-master/mod.ts';
// import * as Utilities from './utilities/utilities.js';

export function Gondola({userData, userSettings} = {}) {
	function _getSettings() {
		const defaultSettings = {
			starter: "blueprint.json",
			output: "public"
		};

		return { ...defaultSettings, ...userSettings}
	}

	function _getData(settings) {
		return userData ? userData : JSON.parse(_getFileContent(`${settings.starter}`));
	}

	const settings = Object.freeze(_getSettings());
	
	const data = Object.freeze(_getData(settings));

	// DENO
	function _getFileContent(filePath) {
		const decoder = new TextDecoder("utf-8");
		return decoder.decode(Deno.readFileSync(filePath));
	}

	// EXTERNAL
	function _marked(contents) {
		return Marked.parse(_getFileContent(contents)).content;
	}

	function _parseJson(path) {
		return JSON.parse(_getFileContent(path));
	}

	function _decipherSlug(data, line) {
		// let location;
		// line.location.includes('::') ? location = line.substring(0, line.indexOf('::')) : location = undefined;
		const slug_params = line.split('--');
		const slug = slug_params.map(param => data[param].replaceAll(' ', '-').replaceAll('.', '').replaceAll('&', 'and').replaceAll(':', '').toLowerCase()).join('-');
		return slug;
	}

	// REDUNDANT
	function _detectF(data) {
		return data.includes('.') ? 'file' : 'folder';
	}

	// DENO
	async function _parseFile(file, obj, data) {
		const fileType = file.split(".")[1];
		const dirPath = Deno.cwd();
		const fullPath = `${dirPath}/${file}`;

		if (fileType === "js") {
			const global_obj = data.filter(node => node.type === 'global') || '';
			const {default: defaultFunc} = await import(fullPath);
			return  defaultFunc(obj, global_obj[0]);
		}
		if (fileType === "md") {
			return _marked(fullPath);
		}
		if (fileType === "json") {
			function checkObjForFormat(obj) {
				for (const [key, value] of Object.entries(obj)) {
		  			if (key === "g_format") {
				  		if (value === "md") {
							let formatted_data = Marked.parse(obj.body).content;
							obj.body = formatted_data;
						}
			  		}

			  		if (typeof value === 'object' && !Array.isArray(value) && value !== null){
			  			const deeper_obj = value;
				  		checkObjForFormat(deeper_obj)
					}

					if (Array.isArray(value)) {
						value.map(item => {
							if (
								typeof item === 'object' &&
							    !Array.isArray(item) &&
							    item !== null
							) {
								checkObjForFormat(item);
							}
						});
					}
				}

				return obj;
			}

			let new_data = _parseJson(fullPath);

			// OBJECT
			if (
			    typeof new_data === 'object' &&
			    !Array.isArray(new_data) &&
			    new_data !== null
			){
				new_data = checkObjForFormat(new_data);
			}

			// ARRAY
			if (Array.isArray(new_data)) {
				new_data = new_data.map(item => {
					if (
						typeof item === 'object' &&
					    !Array.isArray(item) &&
					    item !== null
					) {
						item = checkObjForFormat(item);
						return item;
					} else {
						return item;
					}
				});
			}

			return new_data;
		}
	}

	// DENO
	async function _decipherProperty(prop, obj, data) {
		// STRING
		if (prop && typeof prop === "string") {
			if (_detectF(prop) === "file") {
				return await _parseFile(prop, obj, data);
			} else if (_detectF(prop) === "folder") {
				let folder_obj = {};
				for await (const entry of fs.walk(prop)) {
				  if (entry.isFile) {
				  	const fileName = entry.name.split(".")[0];
				  	folder_obj[fileName] = await _parseFile(entry.path, obj, data)
				  }
				}
				return folder_obj;
			}
		}
		// OBJECT
		else if (prop && typeof prop === "object" && !Array.isArray(prop) && prop !== null) {
			return Promise.all(Object.entries(prop).map(async ([key, value]) => {
				const data_key = key;
			  	const data_value = value;
			  	let filled_obj = {};
			  	if (typeof data_value === "object" && !Array.isArray(data_value)) {
			  		filled_obj[data_key] = data_value;
			  	} else if (_detectF(data_value) === "file") {
					filled_obj[data_key] = await _parseFile(data_value, obj);
				} else if (_detectF(data_value) === "folder") {
					let folder_obj = {};
					for await (const entry of fs.walk(data_value)) {
					  if (entry.isFile) {
					  	const fileName = entry.name.split(".")[0];
					  	folder_obj[fileName] = await _parseFile(entry.path, obj)
					  }
					}

					filled_obj[data_key] = folder_obj;
				}
				return filled_obj;
			})).then(results => {
				let final_obj = {};
				results.map(set => {
					const key = Object.keys(set)[0];
					const value = Object.values(set)[0];
					final_obj[key] = value;
				});

				return final_obj;
			});
		}
	}

	// NOT CURRENTLY USED
	function _settler(promise) {
		if (Array.isArray(promise)) {
			return Promise.allSettled(promise).then(settledPromises => settledPromises.map((settledPromise) =>
			(settledPromise.status === 'fulfilled') ? settledPromise.value : null
			))
		}
		return promise.then((data) => data).catch((error) => null);
	};

	function setInputs(data) {
		return Promise.all(data.map(async obj => {
			obj.inputs ? obj.inputs = await _decipherProperty(obj.inputs, obj, data) : obj = obj;
			return obj;
		})).then(results => {
			return results;
		});
	}

	function setData(data) {
		return Promise.all(data.map(async obj => {
			obj.data ? obj.data = await _decipherProperty(obj.data, obj) : obj = obj;
			return obj;
		})).then(results => {
			return results;
		});
	}

	function setCollections(data) {
		const collections = data.filter(obj => obj.type === "collection");

		/* PAGINATE */
		async function paginate(collection) {
			const data = await _decipherProperty(collection.data, collection);
			const collection_data = collection.collection ? data[`${collection.collection}`] : data;
			const path_reference = collection.path;
			let paginated_collections = [];

			// OBJECT
			if (collection_data && typeof collection_data === "object" && !Array.isArray(collection_data) && collection_data !== null) {
				for (const [key, value] of Object.entries(collection_data)) {
					const slug = _decipherSlug(value, collection.slug);
					const path = `${path_reference}/${slug}`;
					let new_page = {
						type: "page",
						path: path,
						layout: collection.layout,
						inputs: collection.inputs,
						data: value
					};
					new_page.data.collection = collection_data;
					paginated_collections.push(new_page);
				}
			} else if (collection_data && Array.isArray(collection_data)) {
				collection_data.map(set => {
					const slug = _decipherSlug(set, collection.slug);
					const path = `${path_reference}/${slug}`;
					let new_page = {
						type: "page",
						path: path,
						layout: collection.layout,
						inputs: collection.inputs,
						data: set
					};
					paginated_collections.push(new_page);
				});
			}

			return paginated_collections;
		}

		/* ONCE */
		async function once(collection) {
			const data = await _decipherProperty(collection.data, collection);
			const path_reference = collection.path;
			// DON'T FORGET ABOUT ARRAYS
			const collection_data = collection.collection ? data[`${collection.collection}`] : data;

			let paginated_collections = [];
			// OBJECT
			if (collection_data && typeof collection_data === "object" && !Array.isArray(collection_data) && collection_data !== null) {
				let sim_pages = Object.entries(collection_data).map(([key, value]) => {
					const slug = _decipherSlug(value, collection.slug);
					const path = `${path_reference}/${slug}`;

					const proposed_page = {
						type: "page",
				        path: path,
				        layout: collection.layout,
				        inputs: collection.inputs,
				        data: value
					}
					return proposed_page;
				});

				if (collection.sort) {
					const data_target = collection.sort.data;
					sim_pages = sim_pages
					.map(page => {
						page.data[data_target] = new Date(page.data[data_target]);
						return page;
					})
					.sort((a, b) => {
						if (collection.sort.type === "newest") {
							return b.data[data_target]-a.data[data_target];
						}

						if (collection.sort.type === "oldest") {
							return a.data[data_target]-b.data[data_target];
						}
					});
				}

				const new_page = {
					type: "page",
					name: collection.name,
					path: path_reference,
					layout: collection.layout,
					inputs: collection.inputs,
					data: collection.data
				}
				new_page.data.collection = sim_pages

				paginated_collections.push(new_page);

			} else if (collection_data && Array.isArray(collection_data)) {
				const page_array = collection_data.map(set => {
					const slug = _decipherSlug(set, collection.slug);
					const path = `${path_reference}/${slug}`;

					const proposed_page = {
						type: "page",
				        path: path,
				        layout: collection.layout,
				        inputs: collection.inputs,
				        data: set
					}

					return proposed_page;
				});

				const new_page = {
					type: "page",
					path: collection.path,
					layout: collection.layout,
					inputs: collection.inputs,
					data: collection.data,
				};
				new_page.data.collection = page_array

				paginated_collections.push(new_page);
			}

			return paginated_collections;
		}

		/* CHUNK */
		function chunk(collection) {
			const chunkArray = (arr, size) =>
				arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
				: [arr];

			const data = _getData(collection, collection.data);
			const collection_data = _getData(collection, collection.collection);
			const chunked_data = chunkArray(collection_data, collection.size);

			chunked_data.map(arr => {
				const position = chunked_data.indexOf(arr);
				const dirPath = collection.path;

				// Get page path
				let pagePath;
				position === 0 ? pagePath = `${dirPath}` : pagePath = `${dirPath}/${position}`;

				// create hrefs
				let n = chunked_data.length - 1;
				const hrefs = [];
				function iterate(n){
					if (n !== 0) {
						hrefs.push(`${dirPath}/${n}`);
						n = n-1;
						iterate(n);
					} else {
						hrefs.push(`${dirPath}`);
						return
					}
				}
				iterate(n);
				const sortedHrefs = hrefs.sort();

				const lastItem = n;
				let params = {}
				if (position !== 0 && position !== lastItem) {
					params = {
						next: `${dirPath}/${position + 1}`,
						previous: `${dirPath}/${position - 1}`,
						first: `${dirPath}`,
						last: `${dirPath}/${lastItem}`,
					}
				} else if (position === 0) {
					params = {
						next: `${dirPath}/${position + 1}`,
						previous: undefined,
						first: undefined,
						last: `${dirPath}/${lastItem}`,
					}
				} else if (position === lastItem) {
					params = {
						next: undefined,
						previous: `${position === 1 ? `${dirPath}` : `/${position - 1}`}`,
						first: `${dirPath}`,
						last: undefined,
					}
				}

				// get data set for page
				const pageList = arr.map(set => { // establish paths
					const setSlug = genSlug(set, collection.slug);
					const setPath = `${dirPath}/${setSlug}`
					set = {
						type: "page",
				        path: setPath,
				        layout: collection.layout,
				        data: set
					}

					return set;
				});

				const new_page = {
					type: "page",
					path: pagePath,
					layout: collection.layout,
					inputs: collection.inputs,
					data: collection.data,
					hrefs: sortedHrefs,
					href: params
				}

				new_page.data.collection = pageList;

				all_collections.push(new_page);
			});
		}

		return Promise.all(collections.map(async collection => {
			collection.action === 'paginate' ? collection = paginate(collection)
			: collection.action === 'chunk' ? collection = chunk(collection)
			: collection.action === 'paginate-once' ? collection = once(collection)
			: console.log(`Collection "${collection.name || 'name not provided'}" doesn't have an action assigned to it. Please assign one.`)
			return collection;
		})).then(results => {
			const flattend_array = results.flat();
			return data.concat(flattend_array);
		});
	}

	function setPaths(data) {
		return data.map(obj => {
			obj.tags ? obj.tags.forEach(tag => obj.path = `${settings.output}/${tag}${obj.path}/index.html`)
				: obj.path === "" || obj.path === "/" || obj.path === "index" || obj.path === "index.html" || obj.path === "home" ? obj.path = `${settings.output}/index.html`
				: obj.path = `${settings.output}${obj.path}/index.html`;

			return obj;
		});
	}

	function setLayout(data) {
		return Promise.all(data.map(async obj => {
			if (obj.layout) {
				const file = obj.layout;
				const dirPath = Deno.cwd();
				const fullPath = `${dirPath}/${file}`;
				const {default: defaultFunc} = await import(fullPath);
				obj.contents = defaultFunc(obj);
			}
			return obj;
		})).then(results => {
			return results;
		});
	}

	function setDrafts(data) {
		return data.map(obj => {
			obj.type === 'draft' ? obj.type = 'page' : obj.type = obj.type;
			return obj;
		});
	}

	// NEEDS WORK ON EFFICIENCY
	function pass(settings) {
		const output = settings.output;
		const arr = settings.pass;
		/*
		ensure directories 
		start File Watcher: if no new files return a message for no changes made
		manipulate any new media
		pass through directories that have changed
		*/
		arr.map(async dir => {
			// fs.ensureDirSync(`${output}/${dir}`);
			fs.copySync(dir, `${output}/${dir}`, { overwrite: true });
			console.log("PASSED:", dir)
		});
	}

	async function chain(data) {
		return await setLayout(setPaths(await setInputs(await setCollections(await setData(data)))));
	}

	async function draft_chain(data) {
		return await setLayout(setPaths(await setInputs(await setCollections(await setData(setDrafts(data))))));
	}

	async function build(option) {
		const start = new Date().getTime();

		let buildData;
		option === "drafts" ? buildData = await draft_chain(data) : buildData = await chain(data);

		const output = settings.output;
		fs.emptyDirSync(output);
		buildData.forEach(obj => {
			if (obj.type === "page") {
				const page = obj.contents;
				fs.ensureFileSync(obj.path);
				Deno.writeTextFileSync(obj.path, page)
				console.log("WROTE:", obj.path);
			}
		});

		pass(settings);

		const end = new Date().getTime();
		const totalTime = (end-start)/1000;
		console.log(`Built in ${totalTime} seconds`);
	}

	return {
		chain: chain,
		draft_chain: draft_chain,
		build: build
	}
}