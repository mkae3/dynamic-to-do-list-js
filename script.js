// ننتظر تحميل كامل الصفحة قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', function() {

    // اختيار العناصر من DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // دالة لإضافة مهمة جديدة
    function addTask() {
        const taskText = taskInput.value.trim();  // نأخذ النص ونتخلص من المسافات الفارغة

        // التحقق من أن المستخدم أدخل نصًا
        if (taskText === '') {
            alert('Please enter a task.');
            return;  // نوقف التنفيذ إذا لم يدخل شيء
        }

        // إنشاء عنصر li جديد لتمثيل المهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // عندما يضغط المستخدم على زر الحذف، نحذف المهمة من القائمة
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // نضيف زر الحذف إلى المهمة (li)
        li.appendChild(removeBtn);

        // نضيف المهمة إلى قائمة المهام (ul)
        taskList.appendChild(li);

        // نعيد تهيئة مربع الإدخال ليصبح فارغًا بعد الإضافة
        taskInput.value = '';
    }

    // عند الضغط على زر الإضافة، نستدعي دالة إضافة المهمة
    addButton.addEventListener('click', addTask);

    // دعم إضافة المهمة عند الضغط على زر Enter في مربع الإدخال
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
