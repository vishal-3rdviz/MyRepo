 function showPassword(button) {
            var passwordSpan = button.parentNode.querySelector('.password');
            passwordSpan.classList.toggle('hidden');
            if (passwordSpan.classList.contains('hidden')) {
                button.textContent = 'Show';
            } else {
                button.textContent = 'Hide';
            }
        }
