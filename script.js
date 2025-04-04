// Voting functionality
document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.vote-container');
        const countElement = container.querySelector('.vote-count');
        let count = parseInt(countElement.textContent.replace('k', '000').replace('m', '000000'));
        
        if (this.classList.contains('upvote')) {
            if (this.classList.contains('active')) {
                // Already upvoted - remove upvote
                count -= 1;
                this.classList.remove('active');
                this.style.color = '';
            } else {
                // Not upvoted - add upvote
                const downvote = container.querySelector('.downvote.active');
                if (downvote) {
                    count += 2; // Remove downvote and add upvote
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
                // Already downvoted - remove downvote
                count += 1;
                this.classList.remove('active');
                this.style.color = '';
            } else {
                // Not downvoted - add downvote
                const upvote = container.querySelector('.upvote.active');
                if (upvote) {
                    count -= 2; // Remove upvote and add downvote
                    upvote.classList.remove('active');
                    upvote.style.color = '';
                } else {
                    count -= 1;
                }
                this.classList.add('active');
                this.style.color = 'var(--downvote)';
            }
        }
        
        // Format the count for display
        if (count >= 1000000) {
            countElement.textContent = (count / 1000000).toFixed(1) + 'm';
        } else if (count >= 1000) {
            countElement.textContent = (count / 1000).toFixed(1) + 'k';
        } else {
            countElement.textContent = count;
        }
    });
});

// Simulate loading more posts when scrolling to bottom
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        // In a real app, you would fetch more posts here
        console.log('Load more posts...');
    }
});

// Create post button functionality
document.querySelector('.create-post-btn').addEventListener('click', function() {
    alert('Create post functionality would go here!');
});

// Mobile menu toggle could be added here for smaller screens