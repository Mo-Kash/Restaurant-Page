import { initialPage } from "./initialpage";
import {Menu} from "./initialpage";
import {Reserve} from "./initialpage";
import {Contact} from "./initialpage";
import {resetNavBar} from "./initialpage";
import { createFooter } from "./initialpage";
import "./styles.css";

console.log("Test");

resetNavBar();

initialPage();

createFooter();

function tabSwitching(){
    const content = document.getElementById("content");
    const home = document.getElementById("home");
    home.addEventListener("click", ()=>{
        content.innerHTML = '';
        initialPage();
    });
    
    const menu = document.getElementById("menubt");
    menu.addEventListener("click", ()=>{
        content.innerHTML = '';
        Menu();
    });
    
    const reserve = document.getElementById("reservebt");
    reserve.addEventListener("click", ()=>{
        content.innerHTML = '';
        Reserve();
    });
    
    const contact = document.getElementById("contactbt");
    contact.addEventListener("click", ()=>{
        content.innerHTML = '';
        Contact();
    });
}

tabSwitching();