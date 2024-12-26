import cafe from "./cafe.jpeg";
import logo from "./Cafelogo.jpeg";
import drink from "./bevs.jpeg";
import foods from "./food.jpeg";

export function resetNavBar()
{
    const nb = document.querySelector("nav");
    nb.innerHTML = '';
    nb.innerHTML = `<button id="home">Home</button>
                    <button id="menubt">Menu</button>
                    <button id="reservebt">Reservations</button>
                    <button id="contactbt">Contact Us</button>`;
    
    const img0 = document.createElement("img");
    img0.src = logo;
    img0.style="width: 10rem; height: auto";
    nb.prepend(img0);
}

export function initialPage()
{
    const content = document.getElementById("content");

    const welc = document.createElement("div");
    welc.setAttribute("id", "welcome");
    const greeting = document.createElement("p");
    greeting.textContent = "Welcome to Cafe MoKa";
    greeting.style="font-size: 3rem;color:#fb923c;";
    greeting.classList.add("greeting");
    const tagline = document.createElement("p");
    tagline.textContent = "Sandwiches, Sips and Serenity";
    tagline.style="font-size:1.5rem;font-style:italic;color:#fed7aa";
    tagline.classList.add("tagline");
    welc.appendChild(greeting);
    welc.appendChild(tagline);

    content.appendChild(welc);

    const picOfCafe = document.createElement("div");
    picOfCafe.setAttribute("id", "picOfCafe");
    picOfCafe.classList.add("picture");
    const img1 = document.createElement("img");
    img1.src = cafe;
    img1.style = "width: 100%; height: auto;";
    picOfCafe.appendChild(img1);

    content.appendChild(picOfCafe);

    const about = document.createElement("div");
    about.setAttribute("id", "about");
    const desc = document.createElement("p");
    desc.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat illo libero architecto natus nam possimus mollitia adipisci illum porro facilis sint fuga, quidem quisquam corrupti nobis maxime id tempore? Dignissimos ad facilis expedita eveniet labore sit similique corporis. Rerum et, neque facere sed veniam iusto delectus, quam quasi velit dicta perspiciatis pariatur ipsum eos assumenda sint soluta. Et eius unde reiciendis sequi culpa magni optio.";
    about.appendChild(desc);

    content.appendChild(about);
}

export function Menu()
{
    const content = document.getElementById("content");

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    const drinkpic = document.createElement("div");
    const img2 = document.createElement("img");
    img2.src = drink;
    img2.style="width: 25rem; height: auto;";
    img2.classList.add("picture");
    img2.classList.add("drinkpicture");
    drinkpic.classList.add("dpic");
    drinkpic.appendChild(img2);
    menu.appendChild(drinkpic);

    const foodpic = document.createElement("div");
    const img3 = document.createElement("img");
    img3.src = foods;
    img3.style="width: 25rem; height: auto;";
    img3.classList.add("picture");
    img3.classList.add("foodpicture");
    foodpic.classList.add("fpic");
    foodpic.appendChild(img3);
    menu.appendChild(foodpic);

    const bev = document.createElement("div");
    bev.classList.add("bevs");
    bev.innerHTML = `<p style="font-size: 1.75rem;" id="bevgs">Beverages</p>
                <div class="hot">
                    <p style="font-size: 1.5rem;color:#fdba74;"><i>Hot</i></p>
                    <p>Cappuccino</p>
                    <p>Cafe Mocha [Speciality]</p>
                    <p>Cafe Latte</p>
                    <p>Filter Coffee</p>
                    <p>Chai</p>
                    <p>Green Tea</p>
                    <p>Honey-Ginger Tea</p>
                    <p>Black Coffee</p>
                </div>
                <div class="cold">
                    <p style="font-size: 1.5rem;color:#fdba74;"><i>Cold</i></p>
                    <p>Classic Cold Coffee</p>
                    <p>Frappe (Vanilla / Chocolate)</p>
                    <p>Coffee Milkshake</p>
                    <p>Belgian Cold Chocolate</p>
                    <p>Iced Tea</p>
                    <p>Cool Lemonade</p>
                    <p>Seasonal Fruit Milkshake (Please ask the server)</p>
                </div>`;
    menu.appendChild(bev);

    const food = document.createElement("div");
    food.classList.add("food");
    food.innerHTML = `<p style="font-size: 1.75rem;" id="fod">Food</p>
                <div class="veg">
                    <p style="font-size: 1.5rem; color:#fdba74;"><i>Vegetarian</i></p>
                    <p>Veg Club Sandwich</p>
                    <p>Classic Margherita Pizza</p>
                    <p>Aloo Tikki Burger</p>
                    <p>French Fries</p>
                    <p>Veg Loaded Nachos</p>
                    <p>Paneer Bites</p>
                    <p>Potato Wedges</p>
                    <p>Pasta (Penne/Shells)(White/Red/Pink)</p>
                    <p>Garlic Bread</p>
                </div>
                <div class="nonveg">
                    <p style="font-size: 1.5rem; color:#fdba74;"><i>Non-Vegetarian</i></p>
                    <p>Chicken Club Sandwich</p>
                    <p>Chicken Tikka Pizza</p>
                    <p>Chicken Popcorn</p>
                    <p>Chicken Pasta (Penne/Shells)(White/Red/Pink)</p>
                    <p>Chicken loaded Foccaccia</p>
                    <p>Breakfast Egg Sandwich</p>
                    <p>Omellete (cheese/No Cheese)(Chicken Topping aailable)</p>
                    <p>The English Breakfast (Sunny side up eggs, Toast, Sausages, Tomatoes, Beans)</p>
                </div>`;
    menu.appendChild(food);

    content.appendChild(menu);
}

export function Reserve()
{
    const content = document.getElementById("content");

    const reserve = document.createElement("div");
    reserve.setAttribute("id", "reserve");
    reserve.innerHTML = `<p style="font-size: 1.75rem;"><b><em>Reserve A Table</em></b></p>
            <div class="reserveform">
                <label>Reservation Time: <input type="time" id="Rtime" required></label><br><br>
                <label>Number of Guests: <input type="number" id="Rguests" required></label><br><br>
                <button id="submitReservation">Reserve</button>
            </div>`;
    
    content.appendChild(reserve);
}

export function Contact()
{
    const content = document.getElementById("content");

    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.innerHTML = `<p>Call us at <u><em>+91 - 1234567890</em></u></p>
            <p>Send us an e-mail at <u><em>MoKacafe@domain.com</em></u></p>
            <p>Follow us on Instagram <u><em>@TheMoKafe</em></u></p>`;
    
    content.appendChild(contact);
}

export function createFooter()
{
    const bod = document.querySelector("body");

    const footer = document.createElement("div");
    footer.setAttribute("class", "footer");
    footer.innerHTML = `<div id="picCred">Pictures from FREEPIK AI image generator</div>
            <div class="watermark">© Mo-Kash, 2024.</div>`;

    bod.append(footer);
}