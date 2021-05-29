function prodFetch(limit,desc) {
    const url = `https://fakestoreapi.com/products?limit=${limit}&sort=${desc}`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            let result = data.map(el => {
                    return {
                    image: el.image,
                    title:el.title,
                    price: el.price
                }
            });

            let tmp = ``;
            for(let i=0; i< result.length; i++) {
                tmp+=` 
            <div class="col-6 col-md-3" ">
                <img src="${result[i].image}" class="card-img-top  img-fluid" style="height: 200px" alt="...">
                <div class="card-body ">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${result[i].title}</h5>
                    <p class="product_price fw-bold display-8">$${result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
            }
            document.getElementById('output').innerHTML+=tmp; 
        })
        
}

document.getElementById('four').addEventListener('click',myFunction);  
function myFunction(e) {
    e.preventDefault();
    prodFetch();
}
document.querySelector('#par-select').addEventListener('change',myFunction1);
function myFunction1(e) {
    e.preventDefault();
    let limit=document.querySelector('#par-select').value;
    prodFetch(limit);
}
document.querySelector('#sort-select').addEventListener('change',myFunction2);
function myFunction2(e) {
    e.preventDefault();
    let desc=document.querySelector('#sort-select').value;
    prodFetch(desc);
}


//ვერ ავამუშავე

let COL2 = document.getElementById('COL2');
let COL3 = document.getElementById('COL3');
let COL4 = document.getElementById('COL4');
let COLSSS = document.getElementsByClassName('COLSSS');

function twoColumn() {
 COLSSS.classList.replace('col-2');
}

COL2.addEventListener('click', twoColumn);


function threeColumn() {
 COLSSS.classList.replace('col-3');
}

COL3.addEventListener('click', threeColumn);

function fourColumn() {
 COLSSS.classList.replace('col-4');
}

COL4.addEventListener('click', fourColumn);