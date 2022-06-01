/*
Steps
1. Create form functionality and form sections
2. Complete Discover Section
3. Complete Design Section Shell
4. Complete Develop Section Functions Select
5. Complete Deploy Section Upsell Selects
6. Complete Dedicate Plan Selection
7. Create Test Site on Netlify and check Form Submission
- 
8. Finish Vibrant Plugin and test popup in form
9. Finish Expressive Plugin and test popup in form
10. Create global nav options
11. Create global footwr options
12. Create global button options
13. Create global card options
14. Create template page options with selections for blog, business, etc
-
15. Add Design Plugins to autofill form inputs
*/

import * as Hydrogen from './hydrogen/hydrogen.js';

// FORM SECTIONS
function showDetails() {
	return `
	<div id="detailsSection" class="flex flex-column flex-center">
		<label for="name">
			Name
			<input type="text" name="name" placeholder="Sky Captain" value="" />
		</label>

		<label for="email">
			Email Address
			<input type="email" name="email" placeholder="skycaptain@horizon.com" value="" />
		</label>

		<button data-show="discoverSection">Next</button>
	</div>`;
}

function showDiscover() {
	return `
	<!-- DISCOVER -->
	<div id="discoverSection" class="">
		<label for="current_website">
			Do you currently have a website?
			<select name="current_website">
				<option value="true">Yes</option>
				<option value="false">No</option>
			</select>
		</label>

		<label for="primary_use">
			What will you use the site for primarily?
			<select name="primary_use">
				<option value="true">Blogging</option>
				<option value="false">Showcasing Content</option>
				<option value="false">Company Information</option>
				<option value="false">Project Information</option>
			</select>
		</label>

		<label for="content_status">
			Do you have most of the copy and media required for your website? (descriptions, pictures, videos, logos, etc)
			<select name="content_status">
				<option value="true">Yes</option>
				<option value="false">No</option>
			</select>
		</label>

		<p>Please select all of the following content types that you currently have prepared:</p>
		<label for="content_checklist">
			Home Page Copy
			<input type="checkbox" name="type" value="Home Page Copy" />
		</label>
		<label for="content_checklist">
			Other Pages
			<input type="checkbox" name="type" value="Other Pages" />
		</label>
		<label for="content_checklist">
			(If Blogging) At Least 3 Blog Posts
			<input type="checkbox" name="type" value="Blog Posts" />
		</label>
		<label for="content_checklist">
			(If Showcasing Content) At Least 2 Articles of Content (Photography, Videos, Stories, Art, etc)
			<input type="checkbox" name="type" value="Blog Posts" />
		</label>
		<label for="content_checklist">
			General Site Media (Pictures, Videos, etc)
			<input type="checkbox" name="type" value="Home Page Copy" />
		</label>
		<label for="content_checklist">
			Logo and/or Brand Icon (If you'd like to use your project name instead still check this box)
			<input type="checkbox" name="type" value="Logo and Icon" />
		</label>

		<div class="form_navigation">
			<button data-show="detailsSection">Back</button>
			<button data-show="designSection">Next</button>
		</div>
	</div>`;
}

function showDesign() {
	return `
	<!-- DESIGN -->
	<div id="designSection" class="">
		<p>Make Your Design Choices</p>
		<div class="card-design">
			<p>Color Palette</p>
			<p>Choose a palette to start from and then tweak it to make it your own. These colors will be used on various elements throughout your site.</p>
			<button>Start</button>
		</div>

		<div class="card-design">
			<p>Font Pairs</p>
			<p>Choose a font pairing for your site. The primary font will be used for Headings and Large Text. The secondary font will be used for paragraphs and small text.</p>
			<button>Start</button>
		</div>

		<div class="card-design">
			<p>Globabl Components</p>
			<p>Make design choices on components that will either populate every page on your site or be used on various pages. (Components like Site Navigation, Footers, Cards)</p>
			<button>Start</button>
		</div>

		<div class="card-design">
			<p>Site Structure</p>
			<p>Determine the type of flow and layout of your site. We'll use our design expertise to make all of your content shine within the layout type that you choose.</p>
			<button>Start</button>
		</div>

		<div class="form_navigation">
			<button data-show="discoverSection">Back</button>
			<button data-show="developSection">Next</button>
		</div>
	</div>`;
}

function showDevelop() {
	return `
	<!-- DEVELOP -->
	<div id="developSection" class="">
		<p>Please Select the Types of Functionality Needed for Your Site</p>
		<div class="card-function">
			<p>Blogging</p>
		</div>

		<div class="card-function">
			<p>Advanced Animation (+$100)</p>
		</div>

		<div class="card-function">
			<p>Forms</p>
		</div>

		<div class="card-function">
			<p>External Service Integration (+$50 per Integration through Zapier)</p>
		</div>

		<div class="card-function">
			<p>eCommerce (Checkout Button +$100)</p>
		</div>

		<div class="card-function">
			<p>eCommerce (Full Cart and Payment Gateway +$400 and Respective Service Fees)</p>
		</div>

		<div class="form_navigation">
			<button data-show="designSection">Back</button>
			<button data-show="deploySection">Next</button>
		</div>
	</div>`;
}

function showDeploy() {
	return `
	<!-- DEPLOY -->
	<div id="deploySection" class="">
		<p>Pick a Hosting Setup for Your Website</p>

		<div class="card-deploy">
			<p>Bare Bones</p>
			<p>$10 per month</p>
			<p>Minimal Shared Server withough Edge Computing Capabilities</p>
			<p>Note: if you added any additional functions for your site in the previous step your site will not qualify for this plan.</p>
		</div>

		<div class="card-deploy">
			<p>Basic</p>
			<p>$20 per month</p>
			<p>Modern Server Functionalities with Edge Computing Capabilities</p>
		</div>

		<div class="card-deploy">
			<p>Pro</p>
			<p>$50 per month</p>
			<p>Dedicated Servers positioned for high traffix and quick scalability</p>
		</div>

		<div class="form_navigation">
			<button data-show="developSection">Back</button>
			<button data-show="dedicateSection">Next</button>
		</div>
	</div>`;
}

function showDedicate() {
	return `
	<!-- DEDICATE -->
	<div id="dedicateSection" class="">
		<p>Choose a Maintenance Package</p>

		<div class="card-dedicate">
			<p>Base</p>
			<p>Included</p>
			<ul>
				<li>Monthly Analytics</li>
				<li>SSL Certificate</li>
				<li>HTTPS Encryption</li>
				<li>Newsletter Integration</li>
			</ul>
		</div>

		<div class="card-dedicate">
			<p>Advanced</p>
			<p>$20 per month</p>
			<ul>
				<li>Everything in Base +</li>
				<li>Weekly Analytics</li>
			</ul>
		</div>

		<div class="form_navigation">
			<button data-show="deploySection">Back</button>
			<button data-show="reviewSection">Next</button>
		</div>
	</div>`;
}

function showReview() {
	return `
	<!-- REVIEW -->
	<div id="reviewSection" class="">
		<p>Please Review Your Flight Blueprint Below:</p>

		<div class="blueprint">
		</div>

		<div class="form_navigation">
			<button data-show="dedicateSection">Back</button>
			<button>Submit</button>
		</div>
	</div>`;
}


// FORM FUNCTIONS
function showFormSection() {
};


// EVENT LISTENERS
document.addEventListener("click", function(e) {
	if (e.target.dataset.show) {
		e.preventDefault();
		const value = e.target.dataset.show;
		let template;
		if (value === 'detailsSection') {
			template = showDetails();
		}
		if (value === 'discoverSection') {
			template = showDiscover();
		}
		if (value === 'designSection') {
			template = showDesign();
		}
		if (value === 'developSection') {
			template = showDevelop();
		}
		if (value === 'deploySection') {
			template = showDeploy();
		}
		if (value === 'dedicateSection') {
			template = showDedicate();
		}
		if (value === 'reviewSection') {
			template = showReview();
		}
		Hydrogen.render(template, '.form_area', 'clean');
	}
})