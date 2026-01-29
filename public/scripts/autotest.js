document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('autotest-form');
    const result = document.getElementById('autotest-result');
    const counter = document.getElementById('autotest-counter');
    
    if (form && result && counter) {
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        
        const updateCounter = () => {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            counter.textContent = checkedCount;
            
            if (checkedCount > 0) {
                result.style.display = 'block';
            } else {
                result.style.display = 'none';
            }
        };
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateCounter);
        });
    }
});