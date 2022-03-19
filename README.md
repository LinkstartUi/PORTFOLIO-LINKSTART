
https://tympanus.net/codrops/2022/01/03/building-a-scrollable-and-draggable-timeline-with-gsap/


::::::::::::::::::::::::::::::::::::::::

============================================================
Rotate picture at pop
<div class="rotate-scale-up-diag-2">

<h1 class="h2-1">My Portfolio</h1>
<br><br><br><br><br>
<p class="p1-1">Ahmil Djamel
<br>
 <br>FRONTEND DEVELOPER<br>
 Coding is my passion<br>
 <br>
 Get to know about me !<br>
 <br>
 <br><br>
<a class="link1" href="#about"><button class="btn1">Who am I ?</button></a>
 </p>
</div>


<div class="me" id="me">
<script>
    
    AOS.init();
    
    </script>
</div>




<h2 data-aos="zoom-out-right" class="h2myfriend">My Friends</h2><br><h4 class="h4onsl" data-aos="flip-right">On MATRICE</h4>
<br><br><br><br>
<div class="naam" data-aos="fade-up">
<h4>Ann-Lise</h4>
<h4>Ziyad</h4>
<h4>Camille</h4>
<h4>Théo</h4>
<h4>Taous</h4>
<h4>Maureen</h4>
<h4>Aurelie</h4>
<h4>Lucie</h4>
<br>
<h4>ETC</h4>
</div>


<img class="header-boy" src="https://sololearnassets.azureedge.net/home-header-boy.png"
data-aos="fade-up-left">


.rotate-scale-up-diag-2{
-webkit-animation:rotate-scale-up-diag-2 .7s linear both;
animation:rotate-scale-up-diag-2 .7s linear both;
height: 500px;
background-position: center;
width: 100%;
transition: all 1s;
background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
url(https://i.ibb.co/CJMDHkf/Stylish-Digital-Artworks-by-Alex-Maltsev.jpg);
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 68%);
background-size: cover;
position: absolute;
}
.rotate-scale-up-diag-2:hover {
    transform: scale(1.2);
}

@-webkit-keyframes rotate-scale-up-diag-2{0%{-webkit-transform:scale(1) rotate3d(-1,1,0,0deg);transform:scale(1) rotate3d(-1,1,0,0deg)}50%{-webkit-transform:scale(2) rotate3d(-1,1,0,180deg);transform:scale(2) rotate3d(-1,1,0,180deg)}100%{-webkit-transform:scale(1) rotate3d(-1,1,0,360deg);transform:scale(1) rotate3d(-1,1,0,360deg)}}@keyframes rotate-scale-up-diag-2{0%{-webkit-transform:scale(1) rotate3d(-1,1,0,0deg);transform:scale(1) rotate3d(-1,1,0,0deg)}50%{-webkit-transform:scale(2) rotate3d(-1,1,0,180deg);transform:scale(2) rotate3d(-1,1,0,180deg)}100%{-webkit-transform:scale(1) rotate3d(-1,1,0,360deg);transform:scale(1) rotate3d(-1,1,0,360deg)}}



pixijs runban git
<a class="github-fork-ribbon top-right fixed" href="https://github.com/pixijs/pixijs" title="Fork me on GitHub">Fork me on GitHub</a>

.github-fork-ribbon:before {
    content: "";
    padding: 0.38em 0;
    background-color: #e91e63;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    -webkit-box-shadow: 0 0.15em 0.23em 0 rgb(0 0 0 / 50%);
    -moz-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
    box-shadow: 0 0.15em 0.23em 0 rgb(0 0 0 / 50%);
    pointer-events: auto;
}

.github-fork-ribbon:after, .github-fork-ribbon:before {
    position: absolute;
    display: block;
    width: 15.38em;
    height: 1.54em;
    top: 3.23em;
    right: -3.23em;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}


exemple : responsive
@media only screen and (max-width:1450px) {
    .landing-img {
        margin-top: 35%;
        margin-left: 0%;
    }
    .landing-data {
        margin-top: 15%;
    }
    .desktop-close {
        transform: translateY(-5em);
    }
    .about-data-wrapper .abt-summary {
        max-width: 95%;
    }
    .social {
        width: 55%;
    }
    .contact .heading::after {
        bottom: -0.3em;
        font-size: 2em;
    }
    .contact-wrapper {
        width: 80%;
        margin: 2em auto;
        padding: 6em 2em;
    }
    .skills .skill-list {
        margin: 2em -3em;
    }
    .skills:after {
        bottom: 0;
    }
    .skills:before {
        font-size: 10em;
    }
    .design {
        transform: translate(-35%, -50%);
    }
}

@media only screen and (max-width:1300px) {
    .contact .heading::after {
        left: -1em;
    }
    .contact-wrapper {
        width: 90%;
    }
    .landing-img {
        width: 45%;
    }
}

@media only screen and (max-width:1050px) {
    .nav {
        flex-direction: column;
        align-items: center;
        line-height: 2em;
    }
    .nav ul {
        margin-right: 0px;
        font-size: 1.1em;
        margin-top: 0.3em;
    }
    .nav-ctc::before {
        top: -8px;
    }
    .nav .brand {
        font-size: 1.5em;
        position: relative;
    }
    .nav .brand .brandname {
        margin-left: 0.3em;
    }
    .landing-img {
        position: absolute;
        top: 20%;
        width: 65%;
        margin-left: -5%;
    }
    .landing-data {
        margin: 80% auto;
        text-align: center;
    }
    .landing-wave1 {
        bottom: 0em;
    }
    .landing-wave2 {
        bottom: 4em;
    }
    .landing {
        padding: 0;
    }
    .desktop-close {
        transform: translateY(-10em);
    }
    .about {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        position: relative;
        background: var(--light);
        text-align: center;
    }
    .grid {
        display: flex;
        flex-direction: column;
    }
    .about-img {
        left: -15px;
        margin-top: 4em;
        width: 12em;
        height: 12em;
    }
    .about-img::before {
        width: 11em;
        height: 11em;
    }
    .about-img::after {
        width: 10em;
        height: 10em;
    }
    .about-data-wrapper {
        width: 100%;
        margin: -3em 0 0 0;
    }
    .about-data-wrapper .abt-summary {
        max-width: 100%;
    }
    .social {
        margin-left: 5%;
    }
    .particles {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .open_card {
        display: none;
    }
    .project {
        display: none;
    }
    .design {
        display: flex;
    }
    .portfolio ul {
        top: 12%;
    }
    .desc {
        transform: skew(0) translate(50%);
        position: absolute;
        top: 23%;
        right: 50%;
        height: 65%;
        width: 70%;
        box-shadow: 3px 3px 4px 3px var(--shadeTwo);
    }
    .desc-container {
        transform: translate(0, -50%);
        width: 100%;
        top: 50%;
        right: 0;
        height: 80%;
        position: absolute;
    }
    .desc-container .stack {
        font-size: 1.3em;
        padding: 0 10%;
    }
    .desc-container .summary {
        padding: 0 10%;
        font-size: 1.2em;
    }
    .desc-container .checkit a {
        padding: 0.7em 2em;
        font-size: 1.3em;
    }
    .desc-container .title {
        padding: 0 5%;
    }
    .hideDesc {
        right: -100%!important;
    }
    .design {
        width: 75%;
        height: 65%;
        transform: translate(-36%, -40%);
    }
    .design .row .column {
        max-width: unset;
        min-width: 30%;
    }
    .skills:after {
        font-size: 8em;
    }
    .skills:before {
        font-size: 8em;
        top: 2%;
    }
    .contact {
        padding: 2em 0em;
        background: var(--dark-hard);
    }
    .contact .heading {
        margin-left: 1.5em;
        color: var(--light-grey);
    }
    .contact .heading::after {
        content: "Lets Do IT!";
        bottom: -0.35em;
        font-size: 2.5em;
        left: -0.6em;
    }
    .contact-details {
        margin-top: 0;
        width: fit-content;
        margin: 0 auto;
    }
    .contact-wrapper {
        width: 95%;
        flex-direction: column;
        padding: 5em 2em;
        border-radius: 5px;
        background: rgba(30, 30, 30, 0.0);
    }
    .contact-details ul {
        margin-left: -10px;
        font-size: 1em;
        font-weight: 600;
    }
    .contact-form {
        width: 100%;
    }
    .contact-form form input {
        margin: 5px 0
    }
    .contact-form form input:nth-child(1) {
        margin: 5px 5px 5px 0;
    }
    .contact-wrapper::before {
        background: var(--shadeOne);
    }
    .contact-form form input[type="submit"] {
        border: 2px solid brown;
    }
}

@media only screen and (max-width:850px) {
    .landing-img code {
        font-size: 1.1em;
        font-weight: 600;
    }
    .landing-img {
        width: 60%;
        height: 5em;
    }
    .landing-wave2 {
        bottom: 2em;
    }
    .landing-wave1 {
        bottom: -2em;
    }
    .my-name {
        font-size: 3.5em;
    }
    .my-desig {
        font-weight: 300;
    }
    .btn-landing {
        padding: 10px 1.5em;
        font-size: 1em;
        margin: 2em 10px;
    }
    .heading::before {
        width: 1em;
    }
    .heading {
        font-size: 2em;
    }
    .about-data-wrapper .abt-summary {
        font-weight: 300;
        line-height: 1.5em;
        padding: 1em;
        font-size: 1.1em;
    }
    .skills .heading {
        margin-left: 0em;
    }
    .skills:before {
        font-size: 7em;
        top: 1%;
    }
    .skills .skill-list {
        margin: 1em 0em;
    }
    .skill-wrapper i {
        width: 3em;
        height: 3em;
    }
    .skills .skill-wrapper {
        width: 7em;
        height: 7em;
        margin: 1.1em;
    }
    .skill-wrapper::before {
        width: 9em;
        height: 7em;
    }
    .skill-wrapper::after {
        width: 9em;
        height: 7em;
    }
    .skills {
        padding: 5% 5%;
    }
    .skills:after {
        font-size: 6em;
    }
    .portfolio .heading {
        transform: translate(1.5em, 1em);
    }
    .portfolio ul {
        font-size: 1em;
        top: 10%;
    }
    .desc {
        width: 85%;
    }
    .desc-container .title {
        font-size: 2em;
    }
    .desc-container .stack {
        font-size: 1em;
    }
    .desc-container .summary {
        font-size: 1em;
    }
    .desc-container .checkit {
        margin-top: 4em;
    }
    .desc-container .checkit a {
        font-size: 1.2em;
    }
    .design .row .column {
        min-width: 35%;
    }
    .contact-wrapper {
        width: 100%;
        border-radius: 0;
    }
    footer {
        font-size: 0.8em;
        font-weight: 500;
    }
    footer p b {
        display: none;
    }
}

@media only screen and (max-width:680px) {
    .nav-ctc::before {
        top: -18px;
        font-size: 1em;
    }
    .nav {
        flex-direction: row;
        padding: 1em 4em;
        line-height: unset;
    }
    .nav ul {
        font-size: 1.5em;
        display: flex;
        flex-direction: column;
        text-align: center;
        background: var(--dark);
        width: 100%;
        position: absolute;
        /* top: 70%;*/
        left: 0;
        z-index: -1;
        top: -50em;
        line-height: 2.5em;
        padding: 1em 0;
        height: 95vh;
        transition: all 0.5s ease;
    }
    .nav ul li {
        padding: 0 8px;
        font-size: 1em;
    }
    .menu-show {
        top: 70%!important;
    }
    .ham-active {
        color: var(--shadeOne)!important;
    }
    .nav .hamburger {
        display: flex;
        color: var(--light-grey);
        font-size: 1.5em;
        transform: translateX(25px);
        transition: all 0.5s ease;
    }
    .hamburger:hover {
        transform: translateX(25px) rotate(360deg);
    }
    .landing-wave1,
    .landing-wave2 {
        height: 45%;
        width: 250vw;
    }
    .landing-wave2 {
        bottom: 1em;
    }
    .landing-wave1 {
        bottom: -4em;
    }
    .landing-img img {
        width: 85%;
    }

    .about-data-wrapper .abt-summary {
        padding: 1em 0;
        font-size: 0.9em;
    }
    .social {
        margin-left: 0;
        width: 100%;
    }
    .desktop-close {
        transform: translateY(-50em);
    }
    .about-img {
        left: -5px;
        margin-top: 2em;
    }
    .proj-control {
        left: 25%;
        transform: translate(-50%, -20%);
        font-size: 1em;
        width: 70%;
    }
    .about {
        padding: 1em 0 2em 0;
        height: auto;
    }
    .particles {
        display: none;
    }
    .desc {
        width: 100%;
        box-shadow: -1px 0px 10px var(--dark-grey);
        overflow: visible;
    }
    .desc-container {
        height: 100%;
    }
    .proj-control {
        width: 100%;
        justify-content: center;
        position: absolute;
        left: 0;
        transform: translate(0px, -10px);
    }
    .desc-container span {
        margin: 10px auto;
    }
    .portfolio ul {
        font-size: 1em;
        top: 12%;
    }
    .portfolio ul li {
        margin: 5px 0;
    }
    .design {
        width: 95%;
        transform: translate(-18%, -40%);
    }
    .portfolio ul .active {
        margin-bottom: 10px;
    }
    .contact .heading::after {
        bottom: -0.3em;
        font-size: 2em;
        left: -1em;
    }
    .contact-details h3 {
        font-size: 1.2em;
    }
    .contact-details ul {
        font-size: 0.8em;
    }
    .contact-wrapper {
        padding: 2em 2em;
    }
    .contact-form form input {
        width: 99%;
    }
    /*portfolio color change*/
    .portfolio {
        background: var(--dark-hard);
    }
    .portfolio .heading {
        color: var(--shadeOne);
    }
    .portfolio ul li {
        color: var(--blueDark);
    }
    .blog-container {
        grid-template-columns: auto;
    }
    .blog-item:nth-of-type(1) {
        grid-column-end: span 1;
        grid-row-end: span 1;
    }
    .blog-item:nth-of-type(1) .blog-item__title {
        font-size: 0.5em;
    }
    .blog::before {
        font-size: 6em;
    }
    .blog .heading {
        margin-left: 0em;
    }
}

@media only screen and (max-width:370px) and (max-height:640px) {
    .landing-wave2 {
        bottom: -1em;
    }
}

@media only screen and ( min-height: 1280px) {
    .desc {
        top: 20%;
    }
}

@media only screen and (min-height:1000px) {
    .landing-img {
        position: absolute;
        top: 10%;
    }
    .portfolio {
        height: 90vh;
        background: var(--dark-hard);
    }
    .portfolio ul li {
        margin-top: 10px;
        color: var(--blueDark);
    }
    .portfolio .heading {
        color: var(--shadeOne);
    }
    .contact-form form input {
        color: var(--shadeOne);
    }
    .desc {
        box-shadow: -1px 0px 10px var(--dark-grey);
    }
    .contact {
        min-height: unset;
    }
    .skills {
        min-height: unset;
    }
    .about {
        height: auto;
    }
}

@media only screen and (min-height:1000px) and (max-width:610px) {
    .proj-control {
        transform: translate(-38%, -20%);
    }
}

@media only screen and (max-width:500px) {
    .prev,
    .next {
        padding: 0!important;
    }
    .landing-wave1,
    .landing-wave2 {
        height: 50%;
        width: 300vw;
    }
    .landing-data {
        margin: 80% auto;
        padding: 3em 10px;
    }
    .my-name {
        font-size: 2.5em;
    }
    .my-desig {
        font-size: 1.3em;
    }
    .btn-landing {
        padding: 10px 1.3em;
        transform: none;
    }
    .btn-landing:nth-child(1) {
        margin-right: 5px;
    }
    .btn-landing:nth-child(2) {
        margin-left: 5px;
    }
    .my-name::before {
        font-size: 13px;
        padding: 3px 7px 3px 7px;
        top: 28px;
    }
    .my-name::after {
        top: 49px;
        left: 22%;
        height: 0px;
        border-top: 8px solid var(--flame);
        border-right: 15px solid transparent;
    }
    .about-img {
        margin-top: 1em;
        width: 8em;
        height: 8em;
    }
    .about-img::before {
        width: 8em;
        height: 8em;
        top: 0px;
    }
    .about-img::after {
        width: 7em;
        height: 7em;
    }
    .skills .skill-wrapper {
        width: 3em;
        height: 3em;
    }
    .skills .skill-wrapper::before,
    .skills .skill-wrapper::after {
        display: none;
    }
    .heading {
        font-size: 1.7em;
    }
    .heading::before {
        height: 3px;
    }
    .portfolio ul {
        font-size: 1em;
        top: 15%;
        width: 100%;
        left: 0%;
        display: flex;
        justify-content: center;
    }
    .portfolio ul li {
        margin: 5px 15px;
    }
    .contact-details ul li b {
        display: none;
    }
    .contact-wrapper {
        margin: 0 auto;
        padding: 0em 1em;
    }
    .contact {
        padding: 1em 0em 4em 0;
        min-height: 90vh;
    }
    .skills {
        min-height: 80vh;
    }
}

@media only screen and (max-width:390px) {
    .landing-wave1 {
        bottom: -3em;
    }
    .landing-wave2 {
        bottom: -1em;
    }
}

@media only screen and (min-height:800px) and (max-width:380px) {
    .landing-wave2 {
        bottom: -3em;
    }
    .landing-wave1 {
        bottom: -6em;
    }
    .landing-data {
        margin: 100% auto;
    }
}

@media only screen and (min-height:600px) and (max-width:360px) {
    .landing-wave2 {
        bottom: 0em;
    }
    .landing-wave1 {
        bottom: -4em;
    }
    .contact {
        padding: 1em 0 3em 0;
        min-height: 85vh;
    }
}

@media only screen and (max-height:830px) and (max-width:415px) {
    .landing-wave2 {
        bottom: -2em;
    }
    .landing-wave1 {
        bottom: -6em;
    }
    .portfolio ul li {
        margin-top: 15px;
    }
}

@media only screen and (max-height:380px) {
    .landing-wave1,
    .landing-wave2 {
        height: 50%;
        top: 60%;
        left: -55%;
        width: 265vw;
    }
    .landing-img {
        display: none;
    }
    .landing-data {
        margin: auto;
    }
    .nav ul {
        font-size: 1em;
    }
    .portfolio ul {
        font-size: 1em;
        top: 15%;
        width: 100%;
        left: 0%;
        display: flex;
        justify-content: center;
    }
    .portfolio ul li {
        margin: -1em 1em;
    }
}

@media only screen and (max-width:360px) {
    .desc-container .title {
        font-size: 1.3em;
    }
    .desc-container .stack {
        font-size: 0.75em;
    }
    .desc-container .summary {
        font-size: 0.9em;
    }
    .desc-container .checkit {
        margin-top: 2em;
        font-size: 0.7em;
    }
}

@media only screen and (max-width:260px) {
    .btn-landing {
        padding: 8px 1em;
        font-size: 0.85em;
    }
    .my-name {
        font-size: 1.5em;
    }
    .my-desig {
        font-size: 0.7em;
    }
    .my-name::after {
        top: 45px;
        left: 31%;
    }
    .my-name::before {
        font-size: 11px;
        padding: 4px 7px 4px 7px;
        top: 25px;
        border-radius: 2px;
        font-weight: 400;
    }
    .landing-data {
        margin: 45% auto;
    }
    .nav .brand {
        font-size: 1em;
    }
    .nav .brand .brandname {
        margin-left: -0.5em;
    }
    .nav .hamburger {
        font-size: 1em;
    }
    .about-img {
        display: none;
    }
    .about-data-wrapper .abt-summary {
        font-size: 12px;
    }
    .about-data-wrapper {
        padding: 4em 1em;
    }
    .social {
        padding: 1em 0;
    }
    .social a {
        font-size: 0.85em;
    }
    .portfolio ul {
        font-size: 0.75em;
        top: 26%;
    }
    .desc {
        top: 32%;
    }
    .design {
        transform: translate(-18%, -28%);
    }
    .portfolio {
        /* padding: 13em 0; */
        height: 130vh;
    }
    .proj-control {
        font-size: 0.8em;
        transform: translate(0, -40px);
    }
    .contact .heading {
        margin-left: 1.5em;
    }
}
