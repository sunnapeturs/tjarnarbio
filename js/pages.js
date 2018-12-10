var templates ={
		header:`
			<div id="global-nav">
				<nav class="nav-container">
					<a href="index.html"><img class="logo" src="img/tjarnarbio_logo_hires.transparency.white.png" alt="Tjarnarbíó logo" title="Tjarnarbíó Logo"></a>
					<a href="index.html"><img class="logo-scrolled" src="img/TB-logo.svg" alt="Tjarnarbíó logo" title="Tjarnarbíó Logo"></a>
					<ul class="top-nav">
						<li onclick="showEvents()" id="syningar-nav" class="desktop"><a href="#events">Sýningar</a></li>
						<li onclick="showCalendar()" id="calendar-nav"class="desktop"><a href="#calendar">Dagatal</a></li>
						<li class="desktop"><a href="#event">Tjarnarkortin</a></li>					
						<li class="desktop"><a href="">Um okkur</a></li>
						<li class="desktop"><a href="">Eng</a></li>
						<li class="desktop"><input onkeydown="search()" id="searchInput" type="text" name="txt" placeholder="Leit"></li>
						
				<!-- Mobile menu-->	
					</ul>
					<div id="mobile" class="mobile"><i class="fas fa-bars"></i></div>
				</nav>
				<div>
					<div class="mobile-menu">
						<i class="fas fa-times"></i>
						<div class="menu-content">
							<ul class="mobile-nav">
								<li onclick="showEvents()" id="syningar-nav" class="syningar-mobile-nav"><a href="#events">Sýningar</a></li>
								<li onclick="showCalendar()" id="calendar-nav"><a href="#calendar">Dagatal</a></li>
								<li><a href="">Tjarnarkortin</a></li>
								<li><a href="">Um okkur</a></li>
								<li class="mobile-search-field"><i class="fas fa-search"></i><span>Sláðu inn leitarorð</span</li>
							</ul>
						</div>	
				</div>`,
		
		footer:`
			<div class="footer-container">
				<div class="footer-top">
					<img class="logo-footer"src="img/tjarnarbio_logo_hires.transparency.white.png">
					<div class="contact-info">
						<p><span>Tjarnargata 12<br>101 Reykjavík<span></p>
						<a href=""><i class="fab fa-facebook-square"></i></a>
						<a href=""><i class="fab fa-instagram"></i></a>
						<a href=""><i class="fab fa-twitter"></i></a>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="bottom-content">
						<h3>Opnunartímar</h3>
						<p>Opið er á símann:<br>09 – 16 sími : 527-2100</p>
						<p>Tjarnarbarinn:<br>alla daga frá 10 – 23</p>
					</div>
				<div class="bottom-content">
					<h3>Miðasala</h3>
					<p>Miðasala í síma 527-2100<br>opin 2 klst. fyrir viðburð.</p>
					<p>midasala@tjarnarbio.is</p>
					<p>eða hafðu samband<br>Facebook</p>
				</div>
				<div class="bottom-content second">
					<h3>Gott að vita</h3>
					<p>Aðgengi hjólastóla</p>
					<p>Bílastæði við Tjarnarbíó</p>
					<p>Listamenn</p>
				</div>
				<div class="bottom-content">
					<h3>Skráðu þig á póstlistan</h3>
					<input type="text" name="email" placeholder="Email">
					<p><span>tjarnarbio@tjarnarbio.is<span></p>
				</div>
			</div>
		</div>`,

		frontPage:`
			<section class="hero-img">
				<div class="hero-content">
					<h1>Tjarnarbíó<br>heimili sjálfstæðra sviðslista</h1>
					<i class="fas fa-angle-down"></i>
				</div>
			</section>
		<!-- hero Ad Section -->
			<section class="hero-ad one">
				<div class="hero-ad-container">
					<div class="hero-ad-content first">
						<h2>Ratatam</h2>
						<img class="mobile-banner" src="img/mobile-banner-3.jpg">
						<div class="texti-med-linu">
							<p>Nýtt verk frá hinum vinsæla leikhóp Ratatam verður í sýningu á vegum Tjarnarbíó í vetur. Þú getur núna tryggt þér miða í forsölu.</p>
						</div>
						<p><span>Nánar</span></p>
						<button class="kaupa-btn">Kaupa miða</button>
					</div>
				</div>
			</section>
			<section class="hero-ad two">
				<div class="hero-ad-container second">
					<div class="hero-ad-content second">
						<h2>Reykjavík kabarett</h2>
						<img class="mobile-banner" src="img/mobile-banner-2.jpg">
						<div class="texti-med-linu">
							<p>Geysivinsælu sýningar Reykjavík Kabarett verða áfram í sýningu í vetur í Tjarnarbíó. Nýjir listamenn munu bætast í hópinn, meðal annars línudansmær frá Tahiti og húlla snillingur.</p>
						</div>
						<p><span>Nánar</span></p>
						<button class="kaupa-btn">Kaupa miða</button>
					</div>
				</div>
			</section>
		<!-- cards á forsíðu -->
			<div class="cards-frontpage-container">
				<h3>Í sýningu</h3>
				<!-- cards koma inn með JS-->
				<div class="cards-container"></div>
				<p><span>Sjá allar sýningar</span></p>
			</div>
		<!-- Tjarnarbarinn -->
			<div class="tjarnabarinn-container">
				<div class="hero-ad-content">
					<h2>Kíktu Við á TjarnarBarinn</h2>
					<div class="texti-med-linu">
						<p>Komdu við á kaffihúsið okkar, við erum með heitt á könnunni og heimabakaðar tertur. Við bjóðum líka uppá áfenga drykki handa fullorðna fólkinu. </p>
					</div>
					<p><span>Opið er alla daga frá 10 – 23</span></p>
				</div>
				<img class="tjarnarbarinn-img" src="img/tjarnarbarinn.jpg">
			</div>`,

	events:`
		<div id="syningar" class="header-banner"></div>
		<div class="syningar">
		<div class="cards-frontpage-container">
			<div class="syninga-btn-container">
				<div class="syningar-nav">
					<div class="i-syningu"><h3>Í sýningu</h3></div>
					<div class="leikar"><h3>Leikárið 2017–2018</h3></div>
					<div class="vidburdir"><h3>Aðrir Viðburðir</h3></div>
				</div>
				<button onclick="showCalendar()" class="kaupa-btn">Dagatal</button>
			</div>
			<div class="cards-container"></div>	
		</div>
		</div`,

	searchResult:`
		<div class="header-banner">
		</div>
		<div class="syningar">
			<div class="cards-frontpage-container">
				<h3>Leit</h3>
				<div class="cards-container"></div>	
			</div>
		</div`,

	calendar:`
		<div class="header-banner"></div>
		<div class=calendar-container>
			<div class="calendar-filter-container">
				<div class="calendar-filter">
					<div class="dates filter">
						<i class="fas fa-angle-left"></i>
						<h3>Nóvember</h3>
						<i class="fas fa-angle-right"></i>
					</div>
					<div class="shows filter">
						<h4 >Sýning</h4>
					</div>
					<div class="what-time filter">
						<h4>Tími</h4>
					</div>
					<div class="time filter">
						<h4>Lengd</h4>
					</div>
					<div class="price filter">
					<h4>Verð</h4>
					</div>
				</div>
			</div>
			<div class="calendar-dates"></div>
		</div>`
}