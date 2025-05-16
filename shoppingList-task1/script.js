// إنشاء مصفوفة فارغة لتخزين عناصر قائمة التسوق
let shoppingList = [];

// دالة لإضافة عنصر جديد إلى القائمة
function addItem(item) {
  shoppingList.push(item);
}

// دالة لإزالة آخر عنصر من القائمة
function removeLastItem() {
  shoppingList.pop();
  displayList(); // لتحديث العرض بعد الحذف
}

// دالة لعرض كل العناصر داخل <ul>
function displayList() {
  const listDisplay = document.getElementById("listDisplay");
  listDisplay.innerHTML = ""; // تنظيف القائمة قبل عرض العناصر من جديد

  // المرور على كل عنصر في المصفوفة وإنشاؤه داخل <li>
  for (let i = 0; i < shoppingList.length; i++) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    listDisplay.appendChild(li);
  }
}

// دالة تأخذ العنصر من input وتضيفه إلى القائمة
function addItemFromInput() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim(); // حذف الفراغات من البداية والنهاية

  // التحقق أن الحقل ليس فارغًا
  if (newItem !== "") {
    addItem(newItem);     // إضافة العنصر إلى المصفوفة
    input.value = "";     //      // تحديث العرض
  }
}