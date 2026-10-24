// Mobil menyu funksiyasi
function toggleMenu() {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('active');
}

// Kategoriyalarni filter qilish (Tablarni bosganda)
function filterProducts(category, element) {
    // Faol tabni o'zgartirish
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // Mahsulotlarni filterlash
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory.includes(category)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

// Modal funksiyalari
const modal = document.getElementById('orderModal');
const successModal = document.getElementById('successModal');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function openSuccessModal() {
    successModal.style.display = 'flex';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

// Modal tashqarisiga bosilganda yopilishi
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == successModal) {
        successModal.style.display = "none";
    }
}

// Form yuborilishining oldini olish va Success oynasini chiqarish
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal();
    openSuccessModal();
});
