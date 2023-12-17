let bagArray;
startPage();

function startPage() {
  let bagStore = localStorage.getItem('bagArray');
  bagArray = bagStore ? JSON.parse(bagStore) : [];
  displayHomepage();
  displayBagicon();
}

function addToBag(itemId) {
  bagArray.push(itemId);
  localStorage.setItem('bagArray', JSON.stringify(bagArray));
  displayBagicon();
}
function displayBagicon() {
  let bagElementCount = document.querySelector(".bag-item-count");
  if (bagArray.length > 0) {
    bagElementCount.style.visibility = "visible";
    bagElementCount.innerText = bagArray.length;
  } else {
    bagElementCount.style.visibility = "hidden";
  }
}
function displayHomepage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if(!itemsContainerElement){
    return;
  }
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
  <div class="item-container">
        <img class="item-image" src="${item.image}" alt="alt text" />
        <div class="rating">${item.rating.star}⭐ | ${item.rating.review}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="original-price">Rs ${item.price.original_price}</span>
            <span class="current-price">Rs ${item.price.current_price}</span>
            <span class="discount" >(${item.price.discount})% OFF</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.ID})" >add to bag</button>
    </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
