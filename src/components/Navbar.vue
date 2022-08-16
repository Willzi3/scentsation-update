<template>
  <nav role="navigation" class="nav">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a
          href="/"
          class="nav-link router-link-exact-active router-link-active"
          target="_self"
          aria-current="page"
          ><li>Home</li></a
        >
        <a href="/products"><li>Products</li></a>
        <a class="nav-link" href="/about"><li>About</li></a>
        <a href="contact"><li>Contact</li></a>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style>
/* Navbar */
.nav {
  z-index: 1000;
}
.text {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  margin-top: 20%;
}
#menuToggle {
  color: white;
  display: block;
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
.bck {
  text-decoration: none;
  position: sticky;
  top: 0;
  float: right;
  margin-right: 50px;
  color: white;
}
#menuToggle a {
  text-decoration: none;
  color: #FFFFFF;
  transition: color 0.3s ease;
}
#menuToggle a:hover {
  color: rgb(2, 117, 162);
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}
/*
* Just a quick hamburger
*/
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: salmon;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
  
}
#menuToggle span:first-child {
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
/*
* Transform all the slices of hamburger
* into a crossmark.
*/
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
/*
* But let's hide the middle one.
*/
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
/*
* Ohyeah and the last one should go the other direction
*/
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
/*
* Make this absolute positioned
* at the top left of the screen
*/
#menu {
  position: absolute;
  width: 300px;
  height: 120vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: salmon;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
#menu li {
  padding: 10px 0;
  font-size: 22px;
}
#menuToggle input:checked ~ ul {
  transform: none;
}
/* End of Navbar */
</style>
