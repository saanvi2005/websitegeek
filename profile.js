// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Extend the voting functionality to comments
document.querySelectorAll('.comment .vote-btn').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.vote-container');
        const countElement = container.querySelector('.vote-count');
        let count = parseInt(countElement.textContent);
        
        if (this.classList.contains('upvote')) {
            if (this.classList.contains('active')) {
                count -= 1;
                this.classList.remove('active');
                this.style.color = '';
            } else {
                const downvote = container.querySelector('.downvote.active');
                if (downvote) {
                    count += 2;
                    downvote.classList.remove('active');
                    downvote.style.color = '';
                } else {
                    count += 1;
                }
                this.classList.add('active');
                this.style.color = 'var(--upvote)';
            }
        } else if (this.classList.contains('downvote')) {
            if (this.classList.contains('active')) {
                count += 1;
                this.classList.remove('active');
                this.style.color = '';
            } else {
                const upvote = container.querySelector('.upvote.active');
                if (upvote) {
                    count -= 2;
                    upvote.classList.remove('active');
                    upvote.style.color = '';
                } else {
                    count -= 1;
                }
                this.classList.add('active');
                this.style.color = 'var(--downvote)';
            }
        }
        
        countElement.textContent = count;
    });
});

// Edit profile button functionality
document.querySelector('.edit-profile-btn').addEventListener('click', () => {
    alert('Edit profile functionality would go here!');
});