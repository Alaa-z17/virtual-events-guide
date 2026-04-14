
document.addEventListener('DOMContentLoaded', function() {
    

    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
          
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            
            if (name === "" || email === "" || message === "") {
                showAlert('! يرجى ملء جميع الحقول المطلوبة', 'danger');
            } else if (!validateEmail(email)) {
                showAlert('! يرجى إدخال بريد إلكتروني صحيح', 'warning');
            } else {
                showAlert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا', 'success');
                contactForm.reset(); 
            }
        });
    }

  
   function showAlert(message, type) {
    const alertPlaceholder = document.createElement('div');
    alertPlaceholder.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    const formButton = document.querySelector('.d-grid');
    formButton.parentNode.insertBefore(alertPlaceholder, formButton);

    
    setTimeout(() => {
       
        const alertElement = alertPlaceholder.querySelector('.alert');
        if (alertElement) {

            if (window.bootstrap && bootstrap.Alert) {
                const bsAlert = bootstrap.Alert.getOrCreateInstance(alertElement);
                bsAlert.close();
            }
            
            
            setTimeout(() => {
                alertPlaceholder.remove();
            }, 600);
        }
    }, 5000);
}

   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});