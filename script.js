// State tracking for the current active feature
let activeFeature = 'email';

// Feature details dictionary
const features = {
    email: {
        title: 'Smart Email Generator',
        desc: 'Generate professional workplace emails in different communication tones.',
        placeholder: 'Enter bullet points or key details for your email...'
    },
    notes: {
        title: 'Meeting Notes Summarizer',
        desc: 'Summarize long meeting notes, extract action items, and identify decisions.',
        placeholder: 'Paste your raw meeting transcript or notes here...'
    },
    tasks: {
        title: 'AI Task Planner / Scheduler',
        desc: 'Organize your daily or weekly tasks and prioritize according to importance.',
        placeholder: 'List your unsorted tasks and deadlines here...'
    },
    research: {
        title: 'AI Research Assistant',
        desc: 'Summarize deep topics and get concise insights or recommendations quickly.',
        placeholder: 'Enter a topic or complex text to research...'
    },
    chatbot: {
        title: 'AI Chatbot Workspace',
        desc: 'An interactive workplace AI assistant ready to help with common questions.',
        placeholder: 'Ask your workplace productivity question here...'
    }
};

// Function to handle switching between feature tabs
function switchFeature(featureKey) {
    activeFeature = featureKey;
    
    // Update active visual tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Highlight the clicked tab based on text match or position
    event.currentTarget.classList.add('active');
    
    // Update the layout title, description, and input placeholder
    document.getElementById('current-feature-title').innerText = features[featureKey].title;
    document.getElementById('current-feature-desc').innerText = features[featureKey].desc;
    document.getElementById('user-input').placeholder = features[featureKey].placeholder;
    document.getElementById('user-input').value = '';
    
    // Toggle tone selector view (only needed for emails)
    const toneSelect = document.getElementById('tone-select');
    if (featureKey === 'email') {
        toneSelect.style.display = 'block';
    } else {
        toneSelect.style.display = 'none';
    }
    
    // Clear out previous output box contents safely
    document.getElementById('ai-output').innerText = 'Your generated content will appear here...';
    document.getElementById('ai-output').style.color = '#9ca3af';
}

// Function to handle application feature processing
function handleAIRequest() {
    const inputVal = document.getElementById('user-input').value.trim();
    const outputBox = document.getElementById('ai-output');
    
    if (!inputVal) {
        outputBox.innerText = '⚠️ Please enter some prompt text first!';
        outputBox.style.color = '#ef4444';
        return;
    }
    
    outputBox.innerText = '🤖 Processing with prompt engineering guidelines...';
    outputBox.style.color = '#6366f1';
    
    // Simulate prompt response engine delay
    setTimeout(() => {
        let simulatedResponse = '';
        
        switch (activeFeature) {
            case 'email':
                const tone = document.getElementById('tone-select').value;
                simulatedResponse = `[AI ${tone.toUpperCase()} EMAIL OUTPUT]\n\nSubject: Update regarding your request\n\nThank you for reaching out. Based on your prompt ("${inputVal}"), we have processed this draft to align with standard workplace productivity guidelines.\n\nBest regards,\nYour AI Assistant`;
                break;
            case 'notes':
                simulatedResponse = `[AI SUMMARY OUTPUT]\n\n• Executive Summary: Key overview compiled from your source text.\n• Action Items:\n  - Review baseline deliverables\n  - Finalize prompt strategies`;
                break;
            case 'tasks':
                simulatedResponse = `[AI TASK PLANNER OUTPUT]\n\n1. High Priority: Action items extracted from "${inputVal}" structured chronologically.\n2. Medium Priority: Maintenance tasks assigned next workflow window.`;
                break;
            case 'research':
                simulatedResponse = `[AI RESEARCH BRIEF]\n\nVerified Context: Synthesized analysis of "${inputVal}".\nKey Takeaway: Ready for deployment in a modern responsive interface environment.`;
                break;
            case 'chatbot':
                simulatedResponse = `[AI CHATBOT RESPONSE]\n\nI have evaluated your workspace prompt. To customize this feature further, you can integrate a live backend API connection. What would you like to build next?`;
                break;
        }
        
        outputBox.innerText = simulatedResponse;
        outputBox.style.color = '#f3f4f6';
    }, 1200);
}

