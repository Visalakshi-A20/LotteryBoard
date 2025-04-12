const buttons = document.getElementById("getButtons");
const sound = new Audio("Audio.wav");
const winningAudio = new Audio("winningAudio.wav");
const gifts = [
    "$100 Cash",
    "Ipad",
    "Watch",
    "Movie Ticket",
    "$20 Cash",
    "Poker Set",
    "LunchBox",
    "HeadSet",
    "Shopping Coupon",
    "Lipstick",
    "HandBag",
    "Shoes",
    "Jacket",
    "Water Bottle",
    "AirPods",
    "Slip-Ons",
    "$50 Cash",
    "Amazon Voucher",
    "$10 Cash",
    "Laptop",
    "Smartphone",
    "Wireless Charger",
    "Bluetooth Speaker",
    "Sunglasses",
    "Travel Mug",
    "Book Set",
    "Board Game",
    "Coffee Gift Card",
    "Fitness Tracker",
    "Power Bank",
    "Neck Pillow",
    "Tote Bag",
    "Notebook & Pen Set",
    "Hoodie",
    "Gaming Mouse",
    "Desk Lamp",
    "Backpack",
    "Alarm Clock",
    "Waterproof Pouch",
    "Subscription Box",
    "$5 Cash",
    "Phone Stand",
    "Candles",
    "Popcorn Bucket",
    "Desk Organizer",
    "Mini Fan",
    "Yoga Mat",
    "Chocolate Box",
    "Face Mask Set",
    "Keychain Light",
  ];
  
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const resultButton = document.getElementById("resultButton");
const winningGift = document.getElementById("winningGift");

resultButton.addEventListener("click", function () {
  winningGift.textContent = "Please Wait...";
  for (let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }

  let secondsCount = 0;

  const intervalId = setInterval(() => {
    sound.pause();
    sound.currentTime = 0;
    sound.play();

    secondsCount++;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    console.log(randomBox);
    for (let i = 1; i <= 50; i++) {
      if (i == randomBox)
        document.getElementById(i).classList.add("highlightedBox");
      else document.getElementById(i).classList.remove("highlightedBox");
    }
    if (secondsCount == 5) {
      let random = Math.random() * 50;
      let result = Math.floor(random) + 1;
      winningAudio.pause();
      winningAudio.currentTime = 0;
      winningAudio.play();
      winningGift.textContent = `You have got ${result + 1}, you have won  ${
        gifts[result] 
      } !!!!`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(result + 1).classList.add("winningBox");
      clearInterval(intervalId);
    }
  }, 1000);
});
console.log(resultButton);
gifts.forEach(function (value, i) {
  const boxElement = `<div class="box" id=${i + 1}> ${i + 1}. ${value} </div> `;
  console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
