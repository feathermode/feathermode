export default function navigation() {
	return `
		<nav class="nav stack | lg-none | items-center content-between padding-sm">
			<!-- <a href="/#" aria-label="feathermode"><img class="nav-logo" src="/assets/fm_logo-white.svg" alt="feathermode"></a> -->
			<div class="flex items-center content-between width-100">
				<a href="/#">
					<svg class="nav-logo" width="100%" height="100%" viewBox="0 0 1444 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
					    <g transform="matrix(1,0,0,1,-2131.49,-1774.97)">
					        <g transform="matrix(2.12485,0,0,1.22134,4585.4,-771.408)">
					            <g transform="matrix(1,0,0,1.43003,-25.9582,-372.48)">
					                <g>
					                    <g class="logo-name" transform="matrix(0.881505,0,0,1.07243,-2372.43,-1247.85)">
					                        <g transform="matrix(116.631,0,0,116.631,1468.91,2871.03)">
					                            <path d="M0.105,-0.366L0.006,-0.366L0.006,-0.486L0.105,-0.486L0.105,-0.572C0.105,-0.599 0.107,-0.624 0.112,-0.648C0.117,-0.671 0.126,-0.692 0.139,-0.71C0.152,-0.728 0.171,-0.742 0.197,-0.753C0.222,-0.763 0.254,-0.768 0.295,-0.768C0.31,-0.768 0.325,-0.767 0.34,-0.766C0.355,-0.765 0.369,-0.762 0.383,-0.759L0.376,-0.632C0.367,-0.635 0.359,-0.638 0.352,-0.64C0.345,-0.641 0.336,-0.642 0.327,-0.642C0.303,-0.642 0.285,-0.637 0.273,-0.627C0.261,-0.616 0.255,-0.595 0.255,-0.563L0.255,-0.486L0.366,-0.486L0.366,-0.366L0.255,-0.366L0.255,-0L0.105,-0L0.105,-0.366Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1512.06,2871.03)">
					                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1579.01,2871.03)">
					                            <path d="M0.496,-0C0.496,-0 0.412,-0.028 0.348,-0.017C0.298,-0.009 0.233,0.012 0.202,0.012C0.179,0.012 0.158,0.009 0.137,0.003C0.116,-0.004 0.097,-0.013 0.081,-0.026C0.065,-0.039 0.052,-0.054 0.043,-0.073C0.034,-0.092 0.029,-0.113 0.029,-0.138C0.029,-0.166 0.034,-0.19 0.045,-0.209C0.055,-0.228 0.069,-0.244 0.087,-0.257C0.104,-0.27 0.124,-0.28 0.147,-0.287C0.17,-0.294 0.193,-0.299 0.218,-0.302C0.242,-0.305 0.266,-0.307 0.291,-0.308C0.315,-0.309 0.337,-0.309 0.358,-0.309C0.358,-0.336 0.349,-0.357 0.33,-0.373C0.311,-0.388 0.288,-0.396 0.262,-0.396C0.237,-0.396 0.215,-0.391 0.195,-0.381C0.174,-0.37 0.156,-0.356 0.14,-0.338L0.06,-0.42C0.088,-0.446 0.121,-0.466 0.158,-0.479C0.195,-0.492 0.234,-0.498 0.274,-0.498C0.318,-0.498 0.354,-0.493 0.383,-0.482C0.411,-0.47 0.434,-0.454 0.451,-0.433C0.468,-0.412 0.479,-0.386 0.486,-0.355C0.493,-0.323 0.496,-0.288 0.496,-0.247L0.496,-0ZM0.321,-0.213C0.31,-0.213 0.296,-0.213 0.279,-0.212C0.262,-0.211 0.245,-0.208 0.23,-0.203C0.214,-0.198 0.201,-0.191 0.19,-0.182C0.179,-0.173 0.173,-0.16 0.173,-0.143C0.173,-0.125 0.181,-0.112 0.196,-0.103C0.211,-0.094 0.227,-0.09 0.244,-0.09C0.259,-0.09 0.273,-0.092 0.287,-0.096C0.3,-0.1 0.312,-0.106 0.323,-0.113C0.334,-0.12 0.342,-0.13 0.349,-0.141C0.355,-0.152 0.358,-0.166 0.358,-0.181L0.358,-0.213L0.321,-0.213Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1641.64,2871.03)">
					                            <path d="M0.384,-0.366L0.252,-0.366L0.252,-0.204C0.252,-0.191 0.253,-0.179 0.254,-0.168C0.255,-0.157 0.258,-0.147 0.263,-0.139C0.268,-0.131 0.275,-0.125 0.285,-0.121C0.294,-0.116 0.307,-0.114 0.323,-0.114C0.331,-0.114 0.341,-0.115 0.355,-0.117C0.368,-0.118 0.377,-0.122 0.384,-0.128L0.384,-0.003C0.367,0.003 0.35,0.007 0.332,0.009C0.314,0.011 0.296,0.012 0.279,0.012C0.254,0.012 0.23,0.009 0.209,0.004C0.188,-0.001 0.169,-0.01 0.153,-0.022C0.137,-0.033 0.125,-0.048 0.116,-0.067C0.107,-0.086 0.102,-0.108 0.102,-0.135L0.102,-0.366L0.006,-0.366L0.006,-0.486L0.102,-0.486L0.102,-0.63L0.252,-0.63L0.252,-0.486L0.384,-0.486L0.384,-0.366Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1689.11,2871.03)">
					                            <path d="M0.203,-0.756L0.203,-0.42L0.205,-0.42C0.208,-0.429 0.214,-0.439 0.222,-0.448C0.23,-0.457 0.24,-0.466 0.251,-0.473C0.262,-0.48 0.276,-0.486 0.291,-0.491C0.306,-0.496 0.323,-0.498 0.341,-0.498C0.379,-0.498 0.41,-0.492 0.433,-0.481C0.456,-0.469 0.474,-0.453 0.488,-0.432C0.501,-0.411 0.509,-0.387 0.514,-0.359C0.519,-0.331 0.521,-0.301 0.521,-0.268L0.521,-0L0.371,-0L0.371,-0.238C0.371,-0.252 0.371,-0.267 0.37,-0.282C0.369,-0.297 0.366,-0.31 0.361,-0.323C0.356,-0.336 0.348,-0.346 0.338,-0.354C0.327,-0.362 0.312,-0.366 0.293,-0.366C0.274,-0.366 0.258,-0.363 0.246,-0.356C0.234,-0.349 0.225,-0.339 0.219,-0.328C0.212,-0.316 0.208,-0.303 0.206,-0.288C0.204,-0.273 0.203,-0.258 0.203,-0.242L0.203,-0L0.053,-0L0.053,-0.756L0.203,-0.756Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1756.05,2871.03)">
					                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1823,2871.03)">
					                            <path d="M0.053,-0.486C0.053,-0.486 0.169,-0.46 0.221,-0.467C0.276,-0.475 0.312,-0.498 0.345,-0.498C0.354,-0.498 0.362,-0.498 0.371,-0.497C0.38,-0.496 0.388,-0.495 0.395,-0.493L0.395,-0.356C0.384,-0.359 0.374,-0.362 0.364,-0.364C0.353,-0.365 0.342,-0.366 0.331,-0.366C0.302,-0.366 0.28,-0.362 0.263,-0.354C0.246,-0.346 0.234,-0.335 0.225,-0.321C0.216,-0.306 0.21,-0.289 0.207,-0.269C0.204,-0.249 0.203,-0.227 0.203,-0.203L0.203,-0L0.053,-0L0.053,-0.486Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1872.57,2871.03)">
					                            <path d="M0.053,-0.486C0.053,-0.486 0.143,-0.464 0.192,-0.467C0.245,-0.471 0.276,-0.486 0.291,-0.491C0.306,-0.496 0.323,-0.498 0.341,-0.498C0.375,-0.498 0.405,-0.491 0.432,-0.477C0.458,-0.463 0.478,-0.441 0.491,-0.411C0.508,-0.442 0.529,-0.465 0.554,-0.478C0.579,-0.491 0.609,-0.498 0.645,-0.498C0.678,-0.498 0.705,-0.493 0.728,-0.482C0.75,-0.47 0.768,-0.456 0.781,-0.437C0.794,-0.418 0.803,-0.395 0.809,-0.37C0.814,-0.344 0.817,-0.316 0.817,-0.287L0.817,-0L0.667,-0L0.667,-0.283C0.667,-0.306 0.662,-0.325 0.653,-0.342C0.643,-0.358 0.626,-0.366 0.601,-0.366C0.584,-0.366 0.569,-0.363 0.558,-0.358C0.546,-0.352 0.537,-0.344 0.53,-0.334C0.523,-0.324 0.518,-0.312 0.515,-0.299C0.511,-0.286 0.51,-0.272 0.51,-0.257L0.51,-0L0.36,-0L0.36,-0.257C0.36,-0.266 0.36,-0.276 0.359,-0.289C0.358,-0.302 0.356,-0.314 0.352,-0.325C0.348,-0.336 0.342,-0.346 0.333,-0.354C0.324,-0.362 0.31,-0.366 0.293,-0.366C0.274,-0.366 0.258,-0.363 0.246,-0.356C0.234,-0.349 0.225,-0.339 0.219,-0.328C0.212,-0.316 0.208,-0.303 0.206,-0.288C0.204,-0.273 0.203,-0.258 0.203,-0.242L0.203,-0L0.053,-0L0.053,-0.486Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,1974.03,2871.03)">
					                            <path d="M0.035,-0.243C0.035,-0.282 0.042,-0.317 0.056,-0.348C0.07,-0.379 0.089,-0.406 0.114,-0.429C0.138,-0.451 0.167,-0.468 0.2,-0.48C0.233,-0.492 0.268,-0.498 0.305,-0.498C0.342,-0.498 0.378,-0.492 0.411,-0.48C0.444,-0.468 0.472,-0.451 0.497,-0.429C0.521,-0.406 0.54,-0.379 0.554,-0.348C0.568,-0.317 0.575,-0.282 0.575,-0.243C0.575,-0.204 0.568,-0.169 0.554,-0.138C0.54,-0.107 0.521,-0.08 0.497,-0.058C0.472,-0.035 0.444,-0.018 0.411,-0.006C0.378,0.006 0.342,0.012 0.305,0.012C0.268,0.012 0.233,0.006 0.2,-0.006C0.167,-0.018 0.138,-0.035 0.114,-0.058C0.089,-0.08 0.07,-0.107 0.056,-0.138C0.042,-0.169 0.035,-0.204 0.035,-0.243ZM0.185,-0.243C0.185,-0.206 0.196,-0.177 0.217,-0.154C0.238,-0.131 0.267,-0.12 0.305,-0.12C0.343,-0.12 0.373,-0.131 0.394,-0.154C0.415,-0.177 0.425,-0.206 0.425,-0.243C0.425,-0.28 0.415,-0.309 0.394,-0.332C0.373,-0.355 0.343,-0.366 0.305,-0.366C0.267,-0.366 0.238,-0.355 0.217,-0.332C0.196,-0.309 0.185,-0.28 0.185,-0.243Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,2045.18,2871.03)">
					                            <path d="M0.563,-0C0.563,-0 0.48,-0.029 0.397,-0.017C0.367,-0.013 0.338,0 0.323,0.005C0.307,0.01 0.291,0.012 0.274,0.012C0.238,0.012 0.205,0.006 0.176,-0.007C0.147,-0.019 0.122,-0.036 0.101,-0.059C0.08,-0.081 0.063,-0.107 0.052,-0.138C0.041,-0.169 0.035,-0.202 0.035,-0.239C0.035,-0.273 0.04,-0.306 0.051,-0.337C0.061,-0.368 0.076,-0.395 0.095,-0.419C0.114,-0.443 0.137,-0.462 0.164,-0.477C0.191,-0.491 0.222,-0.498 0.257,-0.498C0.288,-0.498 0.318,-0.493 0.345,-0.484C0.372,-0.474 0.394,-0.457 0.411,-0.434L0.413,-0.434L0.413,-0.756L0.563,-0.756L0.563,-0ZM0.425,-0.243C0.425,-0.28 0.415,-0.309 0.394,-0.332C0.373,-0.355 0.343,-0.366 0.305,-0.366C0.267,-0.366 0.238,-0.355 0.217,-0.332C0.196,-0.309 0.185,-0.28 0.185,-0.243C0.185,-0.206 0.196,-0.177 0.217,-0.154C0.238,-0.131 0.267,-0.12 0.305,-0.12C0.343,-0.12 0.373,-0.131 0.394,-0.154C0.415,-0.177 0.425,-0.206 0.425,-0.243Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                        <g transform="matrix(116.631,0,0,116.631,2118.66,2871.03)">
					                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
					                        </g>
					                    </g>
					                    <g class="logo-icon" transform="matrix(0.4802,0,0,0.584209,-2152.75,680)">
					                        <path d="M2183.23,1857.4C2182.73,1857.32 2182.3,1857.23 2181.92,1857.16C2176.41,1856.05 2174.01,1853.64 2174.01,1853.64L2185.82,1852.28C2181.15,1852.41 2176.65,1852.45 2174.02,1852.26C2167.97,1851.84 2164.23,1846.89 2164.23,1846.89C2164.23,1846.89 2169.25,1846.3 2175.59,1845.57C2171.14,1845.42 2167.26,1845.26 2165.17,1845.1C2158.38,1844.56 2154.49,1838.16 2154.49,1838.16L2167.38,1837.69C2162.1,1837.43 2157.37,1836.87 2154.68,1835.82C2146.8,1832.74 2146.94,1826.42 2146.94,1826.42L2162.83,1827.29C2158,1826.48 2153.57,1825.69 2150.33,1825.04C2140.67,1823.09 2141.46,1811.97 2141.46,1811.97L2158.93,1815.19C2151.93,1812.96 2145.9,1810.99 2143.37,1810.03C2135.86,1807.17 2136.62,1794.67 2136.62,1794.67L2160.02,1802.55C2151.22,1798.94 2142.45,1795.09 2137.2,1792.1C2131.78,1789 2132.13,1777.46 2132.13,1777.46C2132.13,1777.46 2137.5,1777.41 2157.97,1784.85C2163.3,1786.78 2169.44,1789.92 2175.54,1793.39C2183,1797.64 2190.34,1802.05 2200.64,1810.85C2204.66,1814.28 2208.4,1819.62 2210.74,1823.06C2211.55,1824.24 2212.38,1825.47 2213.07,1826.75C2213.12,1826.75 2213.16,1826.75 2213.2,1826.76C2217.7,1820.89 2223.19,1817.46 2226.2,1816.46C2230.98,1814.87 2234.87,1814.93 2236.8,1815.08C2239.21,1815.28 2246.36,1815.9 2249.36,1814.9C2252.95,1813.71 2258.27,1812.32 2258.27,1812.32C2258.27,1812.32 2245.94,1829.43 2242.56,1831.02C2238.39,1832.99 2236.89,1835.9 2236.16,1841.27C2235.66,1844.93 2230.86,1854.86 2225.23,1860.33C2215.87,1869.44 2204.62,1870.42 2197.64,1872.78C2186.72,1876.46 2140.72,1911.11 2140.72,1911.11C2140.72,1911.11 2163.19,1881.53 2183.23,1857.4Z" style="fill:white;"/>
					                    </g>
					                </g>
					            </g>
					        </g>
					    </g>
					</svg>
				</a>
				<button id="button-mobile-menu" class="button-main">Menu</button>
			</div>

			<div id="mobile-menu" class="none gap-2 items-center">
				<ul class="auto-flex gap-1 list-none">
					<li><a href="/#spacelift">SpaceLift</a></li>
					<li><a href="/#web-apps">Web Apps</a></li>
					<li><a href="/#process">Process</a></li>
					<li><a href="/#faqs">FAQs</a></li>
					<li><a href="https://wwwinged.feathermode.com" noopener noreferrer>Blog</a></li>
				</ul>
				<a class="button-main" href="/#sign-up">Free Web Consultation</a>
			</div>
		</nav>

		<nav class="nav none | lg-flex | items-center content-between padding-sm">
			<!-- <a href="/#" aria-label="feathermode"><img class="nav-logo" src="/assets/fm_logo-white.svg" alt="feathermode"></a> -->
			<a href="/#">
				<svg class="nav-logo" width="100%" height="100%" viewBox="0 0 1444 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
				    <g transform="matrix(1,0,0,1,-2131.49,-1774.97)">
				        <g transform="matrix(2.12485,0,0,1.22134,4585.4,-771.408)">
				            <g transform="matrix(1,0,0,1.43003,-25.9582,-372.48)">
				                <g>
				                    <g class="logo-name" transform="matrix(0.881505,0,0,1.07243,-2372.43,-1247.85)">
				                        <g transform="matrix(116.631,0,0,116.631,1468.91,2871.03)">
				                            <path d="M0.105,-0.366L0.006,-0.366L0.006,-0.486L0.105,-0.486L0.105,-0.572C0.105,-0.599 0.107,-0.624 0.112,-0.648C0.117,-0.671 0.126,-0.692 0.139,-0.71C0.152,-0.728 0.171,-0.742 0.197,-0.753C0.222,-0.763 0.254,-0.768 0.295,-0.768C0.31,-0.768 0.325,-0.767 0.34,-0.766C0.355,-0.765 0.369,-0.762 0.383,-0.759L0.376,-0.632C0.367,-0.635 0.359,-0.638 0.352,-0.64C0.345,-0.641 0.336,-0.642 0.327,-0.642C0.303,-0.642 0.285,-0.637 0.273,-0.627C0.261,-0.616 0.255,-0.595 0.255,-0.563L0.255,-0.486L0.366,-0.486L0.366,-0.366L0.255,-0.366L0.255,-0L0.105,-0L0.105,-0.366Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1512.06,2871.03)">
				                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1579.01,2871.03)">
				                            <path d="M0.496,-0C0.496,-0 0.412,-0.028 0.348,-0.017C0.298,-0.009 0.233,0.012 0.202,0.012C0.179,0.012 0.158,0.009 0.137,0.003C0.116,-0.004 0.097,-0.013 0.081,-0.026C0.065,-0.039 0.052,-0.054 0.043,-0.073C0.034,-0.092 0.029,-0.113 0.029,-0.138C0.029,-0.166 0.034,-0.19 0.045,-0.209C0.055,-0.228 0.069,-0.244 0.087,-0.257C0.104,-0.27 0.124,-0.28 0.147,-0.287C0.17,-0.294 0.193,-0.299 0.218,-0.302C0.242,-0.305 0.266,-0.307 0.291,-0.308C0.315,-0.309 0.337,-0.309 0.358,-0.309C0.358,-0.336 0.349,-0.357 0.33,-0.373C0.311,-0.388 0.288,-0.396 0.262,-0.396C0.237,-0.396 0.215,-0.391 0.195,-0.381C0.174,-0.37 0.156,-0.356 0.14,-0.338L0.06,-0.42C0.088,-0.446 0.121,-0.466 0.158,-0.479C0.195,-0.492 0.234,-0.498 0.274,-0.498C0.318,-0.498 0.354,-0.493 0.383,-0.482C0.411,-0.47 0.434,-0.454 0.451,-0.433C0.468,-0.412 0.479,-0.386 0.486,-0.355C0.493,-0.323 0.496,-0.288 0.496,-0.247L0.496,-0ZM0.321,-0.213C0.31,-0.213 0.296,-0.213 0.279,-0.212C0.262,-0.211 0.245,-0.208 0.23,-0.203C0.214,-0.198 0.201,-0.191 0.19,-0.182C0.179,-0.173 0.173,-0.16 0.173,-0.143C0.173,-0.125 0.181,-0.112 0.196,-0.103C0.211,-0.094 0.227,-0.09 0.244,-0.09C0.259,-0.09 0.273,-0.092 0.287,-0.096C0.3,-0.1 0.312,-0.106 0.323,-0.113C0.334,-0.12 0.342,-0.13 0.349,-0.141C0.355,-0.152 0.358,-0.166 0.358,-0.181L0.358,-0.213L0.321,-0.213Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1641.64,2871.03)">
				                            <path d="M0.384,-0.366L0.252,-0.366L0.252,-0.204C0.252,-0.191 0.253,-0.179 0.254,-0.168C0.255,-0.157 0.258,-0.147 0.263,-0.139C0.268,-0.131 0.275,-0.125 0.285,-0.121C0.294,-0.116 0.307,-0.114 0.323,-0.114C0.331,-0.114 0.341,-0.115 0.355,-0.117C0.368,-0.118 0.377,-0.122 0.384,-0.128L0.384,-0.003C0.367,0.003 0.35,0.007 0.332,0.009C0.314,0.011 0.296,0.012 0.279,0.012C0.254,0.012 0.23,0.009 0.209,0.004C0.188,-0.001 0.169,-0.01 0.153,-0.022C0.137,-0.033 0.125,-0.048 0.116,-0.067C0.107,-0.086 0.102,-0.108 0.102,-0.135L0.102,-0.366L0.006,-0.366L0.006,-0.486L0.102,-0.486L0.102,-0.63L0.252,-0.63L0.252,-0.486L0.384,-0.486L0.384,-0.366Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1689.11,2871.03)">
				                            <path d="M0.203,-0.756L0.203,-0.42L0.205,-0.42C0.208,-0.429 0.214,-0.439 0.222,-0.448C0.23,-0.457 0.24,-0.466 0.251,-0.473C0.262,-0.48 0.276,-0.486 0.291,-0.491C0.306,-0.496 0.323,-0.498 0.341,-0.498C0.379,-0.498 0.41,-0.492 0.433,-0.481C0.456,-0.469 0.474,-0.453 0.488,-0.432C0.501,-0.411 0.509,-0.387 0.514,-0.359C0.519,-0.331 0.521,-0.301 0.521,-0.268L0.521,-0L0.371,-0L0.371,-0.238C0.371,-0.252 0.371,-0.267 0.37,-0.282C0.369,-0.297 0.366,-0.31 0.361,-0.323C0.356,-0.336 0.348,-0.346 0.338,-0.354C0.327,-0.362 0.312,-0.366 0.293,-0.366C0.274,-0.366 0.258,-0.363 0.246,-0.356C0.234,-0.349 0.225,-0.339 0.219,-0.328C0.212,-0.316 0.208,-0.303 0.206,-0.288C0.204,-0.273 0.203,-0.258 0.203,-0.242L0.203,-0L0.053,-0L0.053,-0.756L0.203,-0.756Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1756.05,2871.03)">
				                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1823,2871.03)">
				                            <path d="M0.053,-0.486C0.053,-0.486 0.169,-0.46 0.221,-0.467C0.276,-0.475 0.312,-0.498 0.345,-0.498C0.354,-0.498 0.362,-0.498 0.371,-0.497C0.38,-0.496 0.388,-0.495 0.395,-0.493L0.395,-0.356C0.384,-0.359 0.374,-0.362 0.364,-0.364C0.353,-0.365 0.342,-0.366 0.331,-0.366C0.302,-0.366 0.28,-0.362 0.263,-0.354C0.246,-0.346 0.234,-0.335 0.225,-0.321C0.216,-0.306 0.21,-0.289 0.207,-0.269C0.204,-0.249 0.203,-0.227 0.203,-0.203L0.203,-0L0.053,-0L0.053,-0.486Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1872.57,2871.03)">
				                            <path d="M0.053,-0.486C0.053,-0.486 0.143,-0.464 0.192,-0.467C0.245,-0.471 0.276,-0.486 0.291,-0.491C0.306,-0.496 0.323,-0.498 0.341,-0.498C0.375,-0.498 0.405,-0.491 0.432,-0.477C0.458,-0.463 0.478,-0.441 0.491,-0.411C0.508,-0.442 0.529,-0.465 0.554,-0.478C0.579,-0.491 0.609,-0.498 0.645,-0.498C0.678,-0.498 0.705,-0.493 0.728,-0.482C0.75,-0.47 0.768,-0.456 0.781,-0.437C0.794,-0.418 0.803,-0.395 0.809,-0.37C0.814,-0.344 0.817,-0.316 0.817,-0.287L0.817,-0L0.667,-0L0.667,-0.283C0.667,-0.306 0.662,-0.325 0.653,-0.342C0.643,-0.358 0.626,-0.366 0.601,-0.366C0.584,-0.366 0.569,-0.363 0.558,-0.358C0.546,-0.352 0.537,-0.344 0.53,-0.334C0.523,-0.324 0.518,-0.312 0.515,-0.299C0.511,-0.286 0.51,-0.272 0.51,-0.257L0.51,-0L0.36,-0L0.36,-0.257C0.36,-0.266 0.36,-0.276 0.359,-0.289C0.358,-0.302 0.356,-0.314 0.352,-0.325C0.348,-0.336 0.342,-0.346 0.333,-0.354C0.324,-0.362 0.31,-0.366 0.293,-0.366C0.274,-0.366 0.258,-0.363 0.246,-0.356C0.234,-0.349 0.225,-0.339 0.219,-0.328C0.212,-0.316 0.208,-0.303 0.206,-0.288C0.204,-0.273 0.203,-0.258 0.203,-0.242L0.203,-0L0.053,-0L0.053,-0.486Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,1974.03,2871.03)">
				                            <path d="M0.035,-0.243C0.035,-0.282 0.042,-0.317 0.056,-0.348C0.07,-0.379 0.089,-0.406 0.114,-0.429C0.138,-0.451 0.167,-0.468 0.2,-0.48C0.233,-0.492 0.268,-0.498 0.305,-0.498C0.342,-0.498 0.378,-0.492 0.411,-0.48C0.444,-0.468 0.472,-0.451 0.497,-0.429C0.521,-0.406 0.54,-0.379 0.554,-0.348C0.568,-0.317 0.575,-0.282 0.575,-0.243C0.575,-0.204 0.568,-0.169 0.554,-0.138C0.54,-0.107 0.521,-0.08 0.497,-0.058C0.472,-0.035 0.444,-0.018 0.411,-0.006C0.378,0.006 0.342,0.012 0.305,0.012C0.268,0.012 0.233,0.006 0.2,-0.006C0.167,-0.018 0.138,-0.035 0.114,-0.058C0.089,-0.08 0.07,-0.107 0.056,-0.138C0.042,-0.169 0.035,-0.204 0.035,-0.243ZM0.185,-0.243C0.185,-0.206 0.196,-0.177 0.217,-0.154C0.238,-0.131 0.267,-0.12 0.305,-0.12C0.343,-0.12 0.373,-0.131 0.394,-0.154C0.415,-0.177 0.425,-0.206 0.425,-0.243C0.425,-0.28 0.415,-0.309 0.394,-0.332C0.373,-0.355 0.343,-0.366 0.305,-0.366C0.267,-0.366 0.238,-0.355 0.217,-0.332C0.196,-0.309 0.185,-0.28 0.185,-0.243Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,2045.18,2871.03)">
				                            <path d="M0.563,-0C0.563,-0 0.48,-0.029 0.397,-0.017C0.367,-0.013 0.338,0 0.323,0.005C0.307,0.01 0.291,0.012 0.274,0.012C0.238,0.012 0.205,0.006 0.176,-0.007C0.147,-0.019 0.122,-0.036 0.101,-0.059C0.08,-0.081 0.063,-0.107 0.052,-0.138C0.041,-0.169 0.035,-0.202 0.035,-0.239C0.035,-0.273 0.04,-0.306 0.051,-0.337C0.061,-0.368 0.076,-0.395 0.095,-0.419C0.114,-0.443 0.137,-0.462 0.164,-0.477C0.191,-0.491 0.222,-0.498 0.257,-0.498C0.288,-0.498 0.318,-0.493 0.345,-0.484C0.372,-0.474 0.394,-0.457 0.411,-0.434L0.413,-0.434L0.413,-0.756L0.563,-0.756L0.563,-0ZM0.425,-0.243C0.425,-0.28 0.415,-0.309 0.394,-0.332C0.373,-0.355 0.343,-0.366 0.305,-0.366C0.267,-0.366 0.238,-0.355 0.217,-0.332C0.196,-0.309 0.185,-0.28 0.185,-0.243C0.185,-0.206 0.196,-0.177 0.217,-0.154C0.238,-0.131 0.267,-0.12 0.305,-0.12C0.343,-0.12 0.373,-0.131 0.394,-0.154C0.415,-0.177 0.425,-0.206 0.425,-0.243Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                        <g transform="matrix(116.631,0,0,116.631,2118.66,2871.03)">
				                            <path d="M0.513,-0.084C0.489,-0.053 0.459,-0.03 0.422,-0.013C0.385,0.004 0.347,0.012 0.308,0.012C0.271,0.012 0.236,0.006 0.203,-0.006C0.169,-0.018 0.141,-0.035 0.117,-0.058C0.092,-0.08 0.073,-0.107 0.059,-0.138C0.045,-0.169 0.038,-0.204 0.038,-0.243C0.038,-0.282 0.045,-0.317 0.059,-0.348C0.073,-0.379 0.092,-0.406 0.117,-0.429C0.141,-0.451 0.169,-0.468 0.203,-0.48C0.236,-0.492 0.271,-0.498 0.308,-0.498C0.343,-0.498 0.374,-0.492 0.403,-0.48C0.431,-0.468 0.455,-0.451 0.475,-0.429C0.494,-0.406 0.509,-0.379 0.52,-0.348C0.531,-0.317 0.536,-0.282 0.536,-0.243L0.536,-0.196L0.188,-0.196C0.194,-0.167 0.207,-0.145 0.227,-0.128C0.247,-0.111 0.272,-0.102 0.301,-0.102C0.326,-0.102 0.347,-0.108 0.364,-0.119C0.381,-0.13 0.395,-0.144 0.408,-0.161L0.513,-0.084ZM0.386,-0.298C0.387,-0.323 0.378,-0.345 0.361,-0.363C0.344,-0.381 0.321,-0.39 0.294,-0.39C0.277,-0.39 0.263,-0.387 0.25,-0.382C0.237,-0.377 0.227,-0.37 0.218,-0.362C0.209,-0.353 0.202,-0.343 0.197,-0.333C0.192,-0.322 0.189,-0.31 0.188,-0.298L0.386,-0.298Z" style="fill:rgb(249,251,255);fill-rule:nonzero;"/>
				                        </g>
				                    </g>
				                    <g class="logo-icon" transform="matrix(0.4802,0,0,0.584209,-2152.75,680)">
				                        <path d="M2183.23,1857.4C2182.73,1857.32 2182.3,1857.23 2181.92,1857.16C2176.41,1856.05 2174.01,1853.64 2174.01,1853.64L2185.82,1852.28C2181.15,1852.41 2176.65,1852.45 2174.02,1852.26C2167.97,1851.84 2164.23,1846.89 2164.23,1846.89C2164.23,1846.89 2169.25,1846.3 2175.59,1845.57C2171.14,1845.42 2167.26,1845.26 2165.17,1845.1C2158.38,1844.56 2154.49,1838.16 2154.49,1838.16L2167.38,1837.69C2162.1,1837.43 2157.37,1836.87 2154.68,1835.82C2146.8,1832.74 2146.94,1826.42 2146.94,1826.42L2162.83,1827.29C2158,1826.48 2153.57,1825.69 2150.33,1825.04C2140.67,1823.09 2141.46,1811.97 2141.46,1811.97L2158.93,1815.19C2151.93,1812.96 2145.9,1810.99 2143.37,1810.03C2135.86,1807.17 2136.62,1794.67 2136.62,1794.67L2160.02,1802.55C2151.22,1798.94 2142.45,1795.09 2137.2,1792.1C2131.78,1789 2132.13,1777.46 2132.13,1777.46C2132.13,1777.46 2137.5,1777.41 2157.97,1784.85C2163.3,1786.78 2169.44,1789.92 2175.54,1793.39C2183,1797.64 2190.34,1802.05 2200.64,1810.85C2204.66,1814.28 2208.4,1819.62 2210.74,1823.06C2211.55,1824.24 2212.38,1825.47 2213.07,1826.75C2213.12,1826.75 2213.16,1826.75 2213.2,1826.76C2217.7,1820.89 2223.19,1817.46 2226.2,1816.46C2230.98,1814.87 2234.87,1814.93 2236.8,1815.08C2239.21,1815.28 2246.36,1815.9 2249.36,1814.9C2252.95,1813.71 2258.27,1812.32 2258.27,1812.32C2258.27,1812.32 2245.94,1829.43 2242.56,1831.02C2238.39,1832.99 2236.89,1835.9 2236.16,1841.27C2235.66,1844.93 2230.86,1854.86 2225.23,1860.33C2215.87,1869.44 2204.62,1870.42 2197.64,1872.78C2186.72,1876.46 2140.72,1911.11 2140.72,1911.11C2140.72,1911.11 2163.19,1881.53 2183.23,1857.4Z" style="fill:white;"/>
				                    </g>
				                </g>
				            </g>
				        </g>
				    </g>
				</svg>
			</a>
			<ul class="flex gap-1 list-none">
				<li><a href="/#spacelift">SpaceLift</a></li>
				<li><a href="/#web-apps">Web Apps</a></li>
				<li><a href="/#process">Process</a></li>
				<li><a href="https://wwwinged.feathermode.com" noopener noreferrer>Blog</a></li>
			</ul>
			<a class="button-main" href="/#sign-up">Free Web Consultation</a>
		</nav>
	`;
}