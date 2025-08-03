
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // إنشاء عنصر li جديد للمهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر إزالة جديد
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        // إضافة كلاس باستخدام classList.add
        removeBtn.classList.add('remove-btn');

        // تعيين حدث onclick لإزالة المهمة عند الضغط على الزر
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // إضافة زر الإزالة إلى المهمة
        li.appendChild(removeBtn);

        // إضافة المهمة إلى قائمة المهام
        taskList.appendChild(li);

        // تنظيف حقل الإدخال
        taskInput.value = '';
    }

    // إضافة مستمع لزر الإضافة
    addButton.addEventListener('click', addTask);

    // إضافة مستمع لإدخال مفتاح "Enter"
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
