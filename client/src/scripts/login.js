const retailButton = document.getElementById('retail-shop-owner');
const supplierButton = document.getElementById('supplier');
const userRoleInput = document.getElementById('userRole');

retailButton.addEventListener('click', () => {
    retailButton.classList.add('active');
    supplierButton.classList.remove('active');
    userRoleInput.value = 'retail';
});

supplierButton.addEventListener('click', () => {
    supplierButton.classList.add('active');
    retailButton.classList.remove('active');
    userRoleInput.value = 'supplier';
});
