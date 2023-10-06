// package-name
// package-price
// package-text
// package-choice
/****Important Note*******/
/*
    If package-choice option text values change in the html document
    they must be adjusted accordingly in the eventListener loop
 */

let packageName = document.querySelector('.package-name');
let packagePrice = document.querySelector('.package-price');
let packageText = document.querySelector('.package-text');
let packageChoice = document.querySelectorAll('.package-choice');

packageChoice.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
        if(document.querySelector('._orderContainer') !== null) {
            document.querySelector('._orderContainer').innerHTML = '';
        }


        if(el.textContent.trim() === 'Fleet Washing') {
            packageName.textContent = el.textContent;
            packagePrice.textContent = '';
            packageText.innerHTML = `
                <span class='estServiceTime'>Estimated Service Time: 5 - 6 Hours</span>

                <li class='package-item'>
                    Interior Vacuum
                </li>
                <li class='package-item'>
                    General Interior Wiping
                </li>
                <li class='package-item'>
                    Cupholder's
                </li>
                <li class='package-item'>
                    Doorjams and Molding
                </li>
                <li class='package-item'>
                    Interior Windows (Tint Safe)
                </li>
                <li class='package-item'>
                    Exterior Hand Wash
                </li>
                <li class='package-item'>
                    Exterior Hand Dried
                </li>
                <li class='package-item'>
                    Chrome Washed
                </li>
                <li class='package-item'>
                    Rims / Tire Dressings
                </li>
                <li class='package-item'>
                    Wheel Wells
                </li>
                <li class='package-item'>
                    Spray Wax - $25 (Optional)
                </li>
                <h4 class='wantAddons'></h4>

                <form class='addOn-form' id='addOn-form-generalwash'></form>
            `;
        } else if(el.textContent.trim() == 'Exterior Detail') {
            packageName.textContent = el.textContent;
            packagePrice.textContent = '';
            packageText.innerHTML = `
                <span class='estServiceTime'>Estimated Service Time: 2.5 - 3 Hours</span>

                <li class='package-item'>
                    Hand Wash off all Dirt and Debris, Wiped down 
                </li>
                <li class='package-item'>
                    with Microfiber towels, Clean and Polish Rims,
                </li>
                <li class='package-item'>
                    Spray down Engine Compartment, Clean all door jams,
                </li>
				<li class='package-item'>
                    Blow all water out of crevices and Skid plates,
                </li>
                <li class='package-item'>
                    Clean and Polish all Chrome while Waxing
                </li>
                <li class='package-item'>
                    and Buffing using only the finest products,
                </li>
				<li class='package-item'>
				    Clean and Polish Windsheild, all Windows, and put Dressing on Tires
				</li>
                <li class='package-item'>
                    Making Your Vehicle Sparkle and Shine again!
                </li>
                <li class='package-item'>
                    Clay Bar - $100 (Optional)
                </li>
                <li class='package-item'>
                    HL Restoration - $75 (Optional)
                </li>
                <li class='package-item'>
                    Engine Detail - $50 (Optional)
                </li>
				<li class='package-item'>
                    Interior Vacuum / Wipedown - $25 (Optional)
                </li>
                <h4 class='wantAddons'></h4>

                <form class='addOn-form' id='addOn-form-exteriordetail'></form>
            `;
        } else if(el.textContent.trim() == 'Interior Detail') {
            packageName.textContent = el.textContent;
            packagePrice.textContent = '';
            packageText.innerHTML = `
                <span class='estServiceTime'>Estimated Service Time: 2.5 - 3 Hours</span>

                <li class='package-item'>
                    Wipe, Clean and Protect all surfaces areas,
                </li>
                <li class='package-item'>
                    Air Vents, Instument Panels, Navigation, VAC, etc.
                </li>
                <li class='package-item'>
                    We Steam Clean stains, Shampoo carpets and seats,
                </li>
                <li class='package-item'>
                    Clean, Condition and Protect all leather surfaces too.
                </li>
                <li class='package-item'>
                    We also do tint safe Interior window cleaning,
                </li>
				<li class='package-item'>
				    to finish off making you car look and smell new!
				</li>
                <li class='package-item'>
                    Dog Hair Removal - $50 (Optional)
                </li>
				<li class='package-item'>
                    Exterior Wash - $25 (Optional)
                </li>
                <h4 class='wantAddons'></h4>

                <form class='addOn-form' id='addOn-form-interiordetail'></form>
            `;
        } else if(el.textContent.trim() == 'Full Detail') {
            packageName.textContent = el.textContent;
            packagePrice.textContent = '';
            packageText.innerHTML = `
                <span class='estServiceTime'>Estimated Service Time: 4 - 5 Hours</span>

                <span class='estServiceTime'>Interior</span>
                <li class='package-item'>
                    Wipe, Clean and Protect all surfaces areas,
                </li>
                <li class='package-item'>
                    Air Vents, Instument Panels, Navigation, VAC, etc.
                </li>
                <li class='package-item'>
                    We Steam Clean stains, Shampoo carpets and seats,
                </li>
                <li class='package-item'>
                    Clean, Condition and Protect all leather surfaces too.
                </li>
                <li class='package-item'>
                    We also do tint safe Interior window cleaning,
                </li>
				<li class='package-item'>
				    to finish off making you car look and smell new!
				</li>
				<span class='estServiceTime'>Exterior</span>
                <li class='package-item'>
                    Hand Wash off all Dirt and Debris, Wiped down 
                </li>
                <li class='package-item'>
                    with Microfiber towels, Clean and Polish Rims,
                </li>
                <li class='package-item'>
                    Spray down Engine Compartment, Clean all door jams,
                </li>
				<li class='package-item'>
                    Blow all water out of crevices and Skid plates,
                </li>
                <li class='package-item'>
                    Clean and Polish all Chrome while Waxing
                </li>
                <li class='package-item'>
                    and Buffing using only the finest products,
                </li>
				<li class='package-item'>
				    Clean and Polish Windsheild, all Windows, and put Dressing on Tires
				</li>
                <li class='package-item'>
                    Making Your Vehicle Sparkle and Shine again!
                </li>

                <!-- THIS PACKAGE HAS NO ADDONS -->

                <form class='addOn-form' id='addOn-form-fulldetail'></form>
            `;
        }
    });
})


