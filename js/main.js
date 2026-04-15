
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

document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const eventType = urlParams.get('type');
    
    let eventImg = document.getElementById('main-event-img');
    let eventTitle = document.querySelector('h1.fw-bold');
    let eventDescription = document.getElementById('eventDesc'); 

    if (eventType === 'github.png') {
        if (eventImg) eventImg.src = 'img/GitHubEvent.png';
        if (eventTitle) eventTitle.innerText = 'ورشة عمل: أساسيات GitHub للطلاب';
        if (eventDescription) eventDescription.innerHTML = 'لا يكتمل عمل المبرمج بدون إتقان أدوات التحكم بالنسخ (Version Control). انضم إلينا لتعلم كيفية استخدام Git ومنصة GitHub لرفع مشاريعك، وإدارة الـ Repositories، والتعاون مع فريقك البرمجي بفعالية. سنشرح مفاهيم الـ Commits, Branches, و Pull Requests بطريقة عملية تساعدك في مسيرتك المهنية والجامعية';
    }
    else if (eventType === 'WebFoundations.png') {
        if (eventImg) eventImg.src = 'img/WebFoundations.png';
        if (eventTitle) eventTitle.innerText = 'دورة تطوير الويب HTML/CSS'; // نص واحد فقط
        if (eventDescription) eventDescription.innerHTML = 'انطلق في رحلة بناء المواقع الإلكترونية من الصفر. في هذه الفعالية، سنغوص في عالم HTML5 لبناء هيكل الصفحات، و CSS3 لإضافة التصاميم الجذابة والتنسيقات المتجاوبة (Responsive Design). سنركز بشكل خاص على استخدام الـ Flexbox و Grid لضمان ظهور موقعك بشكل مثالي على كافة الشاشات، تماماً كما نفعل في مشروعنا الحالي!';
    }
    else if (eventType === 'IntroductoryMeeting.png') {
        if (eventImg) eventImg.src = 'img/IntroductoryMeeting.png';
        if (eventTitle) eventTitle.innerText = 'اللقاء التعريفي السنوي للطلاب الجدد'; // نص واحد
        if (eventDescription) eventDescription.innerHTML ='هل أنت طالب جديد في الجامعة الافتراضية السورية؟ هذا اللقاء هو خطوتك الأولى للنجاح. سنستعرض فيه آلية الدراسة في الجامعة، كيفية استخدام نظام إدارة التعلم (LMS)، وطريقة التواصل مع المنسقين الأكاديميين. كما سيتضمن اللقاء فقرة للإجابة على كافة استفساراتكم حول الامتحانات والمراكز النفاذة بوضوح وشفافية';
    }
});