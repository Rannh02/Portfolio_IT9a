const form = document.getElementById('ContactForm');
const btn = form.querySelector('button[type="submit"]');
const requiredFields = [
    form.email,
    form.fname,
    form.lname,
    form.sname,
    form.CommentLabel
    ];

    function checkFields() {
        const allFilled = requiredFields.every(input => input.value.trim() !== '');
        btn.disabled = !allFilled;
        btn.style.opacity = allFilled ? '1' : '0.6';
        btn.style.cursor = allFilled ? 'pointer' : 'not-allowed';
        }
        requiredFields.forEach(input => {
            input.addEventListener('input', checkFields);
            });
            checkFields();
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (btn.disabled) return;
    alert('sent!');
    form.reset();
    checkFields();
});
btn.addEventListener('mouseenter', function(e) {
    const allFilled = requiredFields.every(input => input.value.trim() !== '');
    if (!allFilled) {
        let tooltip = document.createElement('div');
        tooltip.textContent = 'You need to fill all the fields';
        tooltip.style.position = 'fixed';
        tooltip.style.background = '#333';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '8px 16px';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '1.2rem';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = 9999;
        tooltip.id = 'btn-tooltip';

        
        const rect = btn.getBoundingClientRect();
        tooltip.style.top = (rect.top - 40) + 'px';
        tooltip.style.left = (rect.left + rect.width/2 - 100) + 'px';
        document.body.appendChild(tooltip);
    }
});
btn.addEventListener('mouseleave', function() {
    let tooltip = document.getElementById('btn-tooltip');
    if (tooltip) tooltip.remove();
});
