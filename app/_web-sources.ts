// --- 1. CSS CODE ---
export const cssCode = `
  /* ===========================
   CSS Variables & Reset
   =========================== */
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
    --secondary-color: #7c3aed;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
    --border-radius: 8px;
    --max-width: 1400px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
    min-height: 100vh;
}

/* ===========================
   Typography
   =========================== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
    margin-bottom: 1rem;
}

/* ===========================
   Layout Utilities
   =========================== */
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
}

/* ===========================
   Header & Navigation
   =========================== */
.main-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
    position: sticky;
    top: 0;
    z-index: 1000;
    animation: slideDown 0.5s ease;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.navbar {
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary-color);
    margin: 0;
    font-size: 2rem;
}

.logo-icon {
    font-size: 2.5rem;
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.tagline {
    color: var(--gray-600);
    font-size: 0.95rem;
    margin: 0.25rem 0 0 0;
    font-style: italic;
}

/* ===========================
   Main Content
   =========================== */
.main-content {
    min-height: calc(100vh - 80px);
}

/* ===========================
   Hero Section
   =========================== */
.hero {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
    margin-bottom: 2rem;
    animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero p {
    font-size: 1.25rem;
    opacity: 0.95;
}

/* ===========================
   Experiments Section
   =========================== */
.experiments-section {
    padding: 2rem 0 4rem;
}

.section-title {
    text-align: center;
    color: white;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* ===========================
   Experiment Tabs
   =========================== */
.experiment-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.tab-btn {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid transparent;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
}

.tab-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: white;
}

.tab-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-dark);
    transform: scale(1.05);
}

/* ===========================
   Experiment Container
   =========================== */
.experiment-container {
    display: none;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: var(--shadow-xl);
    animation: fadeInUp 0.5s ease;
}

.experiment-container.active {
    display: block;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.experiment-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--primary-color);
}

.experiment-header h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.experiment-header p {
    color: var(--gray-600);
    margin-bottom: 0;
}

/* ===========================
   Experiment Workspace
   =========================== */
.experiment-workspace {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

/* ===========================
   Controls Panel
   =========================== */
.controls-panel {
    background: var(--gray-100);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
}

.control-group {
    margin-bottom: 1.5rem;
}

.control-group label {
    display: block;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.control-group input[type="range"] {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: var(--gray-300);
    outline: none;
    -webkit-appearance: none;
    appearance: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    transition: all var(--transition-fast);
    box-shadow: var(--shadow-md);
}

.control-group input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    background: var(--primary-dark);
}

.control-group input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    border: none;
    transition: all var(--transition-fast);
    box-shadow: var(--shadow-md);
}

.control-group input[type="range"]::-moz-range-thumb:hover {
    transform: scale(1.2);
    background: var(--primary-dark);
}

.control-group input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-right: 0.5rem;
    accent-color: var(--primary-color);
}

/* ===========================
   Buttons
   =========================== */
.button-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn:active {
    transform: translateY(0);
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
}

.btn-secondary {
    background: var(--gray-400);
    color: white;
}

.btn-secondary:hover {
    background: var(--gray-600);
}

.btn-warning {
    background: var(--warning-color);
    color: white;
}

.btn-warning:hover {
    background: #d97706;
}

/* ===========================
   Info Panel
   =========================== */
.info-panel {
    background: white;
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
}

.info-panel h4 {
    color: var(--primary-color);
    font-size: 1rem;
    margin-bottom: 0.75rem;
}

.data-list {
    list-style: none;
}

.data-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-200);
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
}

.data-list li:last-child {
    border-bottom: none;
}

.data-list li span {
    font-weight: 700;
    color: var(--primary-color);
}

/* ===========================
   Canvas Container
   =========================== */
.canvas-container {
    position: relative;
    background: var(--gray-100);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    justify-content: center;
}

.canvas-container canvas {
    display: block;
    max-width: 100%;
    height: auto;
    background: linear-gradient(to bottom, #87ceeb 0%, #e0f6ff 100%);
    cursor: crosshair;
}

.canvas-overlay {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(37, 99, 235, 0.9);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: var(--shadow-md);
    animation: pulse 2s ease-in-out infinite;
    pointer-events: none;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.trajectory-info,
.drag-hint {
    margin: 0;
}

/* ===========================
   Experiment Footer
   =========================== */
.experiment-footer {
    margin-top: 2rem;
}

.theory-section {
    background: var(--gray-100);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.theory-section summary {
    padding: 1rem 1.5rem;
    background: var(--primary-color);
    color: white;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    transition: background var(--transition-base);
}

.theory-section summary:hover {
    background: var(--primary-dark);
}

.theory-content {
    padding: 1.5rem;
    line-height: 1.8;
}

.theory-content h5 {
    color: var(--primary-color);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

.theory-content ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

.theory-content li {
    margin-bottom: 0.5rem;
}

.theory-content p {
    color: var(--gray-700);
}

.theory-content em {
    color: var(--gray-600);
    font-size: 0.95rem;
}

/* ===========================
   Main Footer
   =========================== */
.main-footer {
    background: rgba(30, 41, 59, 0.95);
    color: white;
    padding: 3rem 0 1rem;
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    color: var(--primary-light);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.footer-section p {
    color: var(--gray-300);
    font-size: 0.95rem;
    line-height: 1.8;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    padding: 0.4rem 0;
    color: var(--gray-300);
    font-size: 0.95rem;
}

.footer-bottom {
    border-top: 1px solid var(--gray-700);
    padding-top: 1.5rem;
    text-align: center;
}

.footer-bottom p {
    color: var(--gray-400);
    font-size: 0.9rem;
    margin: 0;
}

/* ===========================
   Responsive Design
   =========================== */
@media (max-width: 1024px) {
    .experiment-workspace {
        grid-template-columns: 1fr;
    }
    
    .controls-panel {
        order: 2;
    }
    
    .canvas-container {
        order: 1;
        margin-bottom: 1rem;
    }
}

@media (max-width: 768px) {
    html {
        font-size: 14px;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
    
    .hero {
        padding: 3rem 0;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .experiment-tabs {
        flex-direction: column;
    }
    
    .tab-btn {
        width: 100%;
    }
    
    .experiment-container {
        padding: 1.5rem;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .canvas-container canvas {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 480px) {
    html {
        font-size: 12px;
    }
    
    .logo {
        font-size: 1.5rem;
    }
    
    .logo-icon {
        font-size: 2rem;
    }
    
    .experiment-container {
        padding: 1rem;
    }
    
    .controls-panel {
        padding: 1rem;
    }
    
    .button-group {
        gap: 0.5rem;
    }
    
    .btn {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
    }
}

/* ===========================
   Animations & Transitions
   =========================== */
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.loading {
    background: linear-gradient(
        to right,
        var(--gray-200) 0%,
        var(--gray-300) 20%,
        var(--gray-200) 40%,
        var(--gray-200) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s linear infinite;
}

/* ===========================
   Accessibility
   =========================== */
:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* ===========================
   Print Styles
   =========================== */
@media print {
    .main-header,
    .experiment-tabs,
    .controls-panel,
    .main-footer {
        display: none;
    }
    
    body {
        background: white;
    }
    
    .experiment-container {
        box-shadow: none;
        page-break-inside: avoid;
    }
}
`;

export const jsCode = `
// ===========================
// Global State & Configuration
// ===========================
const STATE = {
    currentExperiment: 'projectile',
    projectile: {
        isRunning: false,
        velocity: 50,
        angle: 45,
        gravity: 9.8,
        time: 0,
        maxRange: 0,
        maxHeight: 0,
        flightTime: 0,
        trajectoryPoints: []
    },
    pendulum: {
        isRunning: false,
        length: 200,
        angle: 30,
        mass: 5,
        angularVelocity: 0,
        angularAcceleration: 0,
        showTrail: true,
        trail: [],
        startTime: 0,
        swingCount: 0,
        period: 0
    },
    spring: {
        isRunning: false,
        constant: 50,
        mass: 2,
        damping: 0.98,
        showForceVector: true,
        position: 0,
        velocity: 0,
        naturalLength: 150,
        isDragging: false
    }
};

// ===========================
// Utility Functions
// ===========================
const utils = {
    toRadians: (degrees) => degrees * Math.PI / 180,
    toDegrees: (radians) => radians * 180 / Math.PI,
    round: (num, decimals = 2) => Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals),
    clamp: (value, min, max) => Math.min(Math.max(value, min), max)
};

// ===========================
// DOM Elements
// ===========================
const DOM = {
    // Tabs
    tabButtons: document.querySelectorAll('.tab-btn'),
    
    // Projectile
    projectileCanvas: document.getElementById('projectile-canvas'),
    velocitySlider: document.getElementById('velocity'),
    angleSlider: document.getElementById('angle'),
    gravitySlider: document.getElementById('gravity'),
    launchBtn: document.getElementById('launch-btn'),
    resetProjectileBtn: document.getElementById('reset-projectile'),
    velocityValue: document.getElementById('velocity-value'),
    angleValue: document.getElementById('angle-value'),
    gravityValue: document.getElementById('gravity-value'),
    maxRangeSpan: document.getElementById('max-range'),
    maxHeightSpan: document.getElementById('max-height'),
    flightTimeSpan: document.getElementById('flight-time'),
    finalVelocitySpan: document.getElementById('final-velocity'),
    
    // Pendulum
    pendulumCanvas: document.getElementById('pendulum-canvas'),
    pendulumLengthSlider: document.getElementById('pendulum-length'),
    pendulumAngleSlider: document.getElementById('pendulum-angle'),
    pendulumMassSlider: document.getElementById('pendulum-mass'),
    showTrailCheckbox: document.getElementById('show-trail'),
    startPendulumBtn: document.getElementById('start-pendulum'),
    stopPendulumBtn: document.getElementById('stop-pendulum'),
    resetPendulumBtn: document.getElementById('reset-pendulum'),
    lengthValue: document.getElementById('length-value'),
    pendulumAngleValue: document.getElementById('pendulum-angle-value'),
    massValue: document.getElementById('mass-value'),
    periodSpan: document.getElementById('period'),
    frequencySpan: document.getElementById('frequency'),
    kineticEnergySpan: document.getElementById('kinetic-energy'),
    potentialEnergySpan: document.getElementById('potential-energy'),
    totalEnergySpan: document.getElementById('total-energy'),
    
    // Spring
    springCanvas: document.getElementById('spring-canvas'),
    springConstantSlider: document.getElementById('spring-constant'),
    springMassSlider: document.getElementById('spring-mass'),
    dampingSlider: document.getElementById('damping'),
    showForceVectorCheckbox: document.getElementById('show-force-vector'),
    startSpringBtn: document.getElementById('start-spring'),
    stopSpringBtn: document.getElementById('stop-spring'),
    resetSpringBtn: document.getElementById('reset-spring'),
    springKValue: document.getElementById('spring-k-value'),
    springMassValue: document.getElementById('spring-mass-value'),
    dampingValue: document.getElementById('damping-value'),
    springDisplacementSpan: document.getElementById('spring-displacement'),
    springForceSpan: document.getElementById('spring-force'),
    weightForceSpan: document.getElementById('weight-force'),
    springVelocitySpan: document.getElementById('spring-velocity'),
    springAccelerationSpan: document.getElementById('spring-acceleration')
};

// ===========================
// Tab Switching
// ===========================
function initializeTabs() {
    DOM.tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const experiment = button.dataset.experiment;
            
            // Update active tab
            DOM.tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active experiment container
            document.querySelectorAll('.experiment-container').forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(experiment + '-experiment').classList.add('active');
            
            // Stop all animations
            stopAllExperiments();
            
            // Update state
            STATE.currentExperiment = experiment;
        });
    });
}

function stopAllExperiments() {
    STATE.projectile.isRunning = false;
    STATE.pendulum.isRunning = false;
    STATE.spring.isRunning = false;
}

// ===========================
// PROJECTILE MOTION EXPERIMENT
// ===========================
class ProjectileMotion {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scale = 2; // pixels per meter
        this.originX = 50;
        this.originY = canvas.height - 50;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Event listeners
        DOM.velocitySlider.addEventListener('input', (e) => {
            STATE.projectile.velocity = parseFloat(e.target.value);
            DOM.velocityValue.textContent = e.target.value;
        });
        
        DOM.angleSlider.addEventListener('input', (e) => {
            STATE.projectile.angle = parseFloat(e.target.value);
            DOM.angleValue.textContent = e.target.value;
        });
        
        DOM.gravitySlider.addEventListener('input', (e) => {
            STATE.projectile.gravity = parseFloat(e.target.value);
            DOM.gravityValue.textContent = e.target.value;
        });
        
        DOM.launchBtn.addEventListener('click', () => this.launch());
        DOM.resetProjectileBtn.addEventListener('click', () => this.reset());
        
        this.drawStatic();
    }
    
    launch() {
        if (STATE.projectile.isRunning) return;
        
        STATE.projectile.isRunning = true;
        STATE.projectile.time = 0;
        STATE.projectile.trajectoryPoints = [];
        
        this.calculatePhysics();
        this.animate();
    }
    
    calculatePhysics() {
        const { velocity, angle, gravity } = STATE.projectile;
        const angleRad = utils.toRadians(angle);
        
        // Calculate max range, height, and flight time
        STATE.projectile.maxRange = utils.round((velocity * velocity * Math.sin(2 * angleRad)) / gravity);
        STATE.projectile.maxHeight = utils.round((velocity * velocity * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * gravity));
        STATE.projectile.flightTime = utils.round((2 * velocity * Math.sin(angleRad)) / gravity);
        
        // Update display
        DOM.maxRangeSpan.textContent = STATE.projectile.maxRange;
        DOM.maxHeightSpan.textContent = STATE.projectile.maxHeight;
        DOM.flightTimeSpan.textContent = STATE.projectile.flightTime;
    }
    
    animate() {
        if (!STATE.projectile.isRunning) return;
        
        const { velocity, angle, gravity, time, flightTime } = STATE.projectile;
        const angleRad = utils.toRadians(angle);
        
        // Calculate position
        const x = velocity * Math.cos(angleRad) * time;
        const y = velocity * Math.sin(angleRad) * time - 0.5 * gravity * time * time;
        
        // Store trajectory point
        STATE.projectile.trajectoryPoints.push({ x, y });
        
        // Calculate final velocity
        const vx = velocity * Math.cos(angleRad);
        const vy = velocity * Math.sin(angleRad) - gravity * time;
        const finalVelocity = utils.round(Math.sqrt(vx * vx + vy * vy));
        DOM.finalVelocitySpan.textContent = finalVelocity;
        
        this.draw(x, y);
        
        STATE.projectile.time += 0.05;
        
        // Check if projectile has landed
        if (y < 0 || time > flightTime + 0.1) {
            STATE.projectile.isRunning = false;
            return;
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    draw(currentX, currentY) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawStatic();
        
        // Draw trajectory
        this.ctx.strokeStyle = '#3b82f6';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        
        STATE.projectile.trajectoryPoints.forEach((point, index) => {
            const screenX = this.originX + point.x * this.scale;
            const screenY = this.originY - point.y * this.scale;
            
            if (index === 0) {
                this.ctx.moveTo(screenX, screenY);
            } else {
                this.ctx.lineTo(screenX, screenY);
            }
        });
        
        this.ctx.stroke();
        
        // Draw projectile
        if (currentY >= 0) {
            const screenX = this.originX + currentX * this.scale;
            const screenY = this.originY - currentY * this.scale;
            
            // Projectile ball
            this.ctx.fillStyle = '#ef4444';
            this.ctx.beginPath();
            this.ctx.arc(screenX, screenY, 8, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Projectile shadow
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            this.ctx.beginPath();
            this.ctx.ellipse(this.originX + currentX * this.scale, this.originY, 6, 3, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Velocity vector
            this.drawVelocityVector(screenX, screenY);
        }
    }
    
    drawStatic() {
        const ctx = this.ctx;
        
        // Background
        ctx.fillStyle = '#e0f6ff';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Ground
        ctx.fillStyle = '#86efac';
        ctx.fillRect(0, this.originY, this.canvas.width, this.canvas.height - this.originY);
        
        // Ground line
        ctx.strokeStyle = '#16a34a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, this.originY);
        ctx.lineTo(this.canvas.width, this.originY);
        ctx.stroke();
        
        // Grid lines
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        
        // Vertical grid
        for (let x = this.originX; x < this.canvas.width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.originY);
            ctx.stroke();
        }
        
        // Horizontal grid
        for (let y = this.originY; y > 0; y -= 50) {
            ctx.beginPath();
            ctx.moveTo(this.originX, y);
            ctx.lineTo(this.canvas.width, y);
            ctx.stroke();
        }
        
        // Cannon
        ctx.save();
        ctx.translate(this.originX, this.originY);
        ctx.rotate(-utils.toRadians(STATE.projectile.angle));
        
        // Cannon barrel
        ctx.fillStyle = '#475569';
        ctx.fillRect(0, -8, 40, 16);
        
        ctx.restore();
        
        // Cannon base
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Scale markers
        ctx.fillStyle = '#1e293b';
        ctx.font = '10px sans-serif';
        ctx.fillText('0m', this.originX - 5, this.originY + 20);
        
        for (let i = 50; i < this.canvas.width - this.originX; i += 50) {
            const meters = Math.round(i / this.scale);
            // FIX: String concatenation instead of template literal
            ctx.fillText(meters + 'm', this.originX + i - 10, this.originY + 20);
            ctx.fillRect(this.originX + i, this.originY, 1, 5);
        }
    }
    
    drawVelocityVector(x, y) {
        const { velocity, angle, gravity, time } = STATE.projectile;
        const angleRad = utils.toRadians(angle);
        
        const vx = velocity * Math.cos(angleRad);
        const vy = velocity * Math.sin(angleRad) - gravity * time;
        
        const scale = 1.5;
        const arrowEndX = x + vx * scale;
        const arrowEndY = y - vy * scale;
        
        // Vector line
        this.ctx.strokeStyle = '#f59e0b';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(arrowEndX, arrowEndY);
        this.ctx.stroke();
        
        // Arrow head
        const headLength = 10;
        const arrowAngle = Math.atan2(arrowEndY - y, arrowEndX - x);
        
        this.ctx.beginPath();
        this.ctx.moveTo(arrowEndX, arrowEndY);
        this.ctx.lineTo(
            arrowEndX - headLength * Math.cos(arrowAngle - Math.PI / 6),
            arrowEndY - headLength * Math.sin(arrowAngle - Math.PI / 6)
        );
        this.ctx.moveTo(arrowEndX, arrowEndY);
        this.ctx.lineTo(
            arrowEndX - headLength * Math.cos(arrowAngle + Math.PI / 6),
            arrowEndY - headLength * Math.sin(arrowAngle + Math.PI / 6)
        );
        this.ctx.stroke();
    }
    
    reset() {
        STATE.projectile.isRunning = false;
        STATE.projectile.time = 0;
        STATE.projectile.trajectoryPoints = [];
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        DOM.maxRangeSpan.textContent = '0';
        DOM.maxHeightSpan.textContent = '0';
        DOM.flightTimeSpan.textContent = '0';
        DOM.finalVelocitySpan.textContent = '0';
        
        this.drawStatic();
    }
}

// ===========================
// PENDULUM EXPERIMENT
// ===========================
class Pendulum {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.centerX = canvas.width / 2;
        this.centerY = 50;
        this.animationId = null;
        this.lastTime = Date.now();
        
        this.init();
    }
    
    init() {
        // Event listeners
        DOM.pendulumLengthSlider.addEventListener('input', (e) => {
            STATE.pendulum.length = parseFloat(e.target.value);
            DOM.lengthValue.textContent = e.target.value;
            if (!STATE.pendulum.isRunning) this.draw();
        });
        
        DOM.pendulumAngleSlider.addEventListener('input', (e) => {
            STATE.pendulum.angle = parseFloat(e.target.value);
            DOM.pendulumAngleValue.textContent = e.target.value;
            if (!STATE.pendulum.isRunning) this.draw();
        });
        
        DOM.pendulumMassSlider.addEventListener('input', (e) => {
            STATE.pendulum.mass = parseFloat(e.target.value);
            DOM.massValue.textContent = e.target.value;
        });
        
        DOM.showTrailCheckbox.addEventListener('change', (e) => {
            STATE.pendulum.showTrail = e.target.checked;
        });
        
        DOM.startPendulumBtn.addEventListener('click', () => this.start());
        DOM.stopPendulumBtn.addEventListener('click', () => this.stop());
        DOM.resetPendulumBtn.addEventListener('click', () => this.reset());
        
        // Drag functionality
        this.setupDragAndDrop();
        
        this.calculateTheoretical();
        this.draw();
    }
    
    setupDragAndDrop() {
        let isDragging = false;
        
        this.canvas.addEventListener('mousedown', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const bobX = this.centerX + STATE.pendulum.length * Math.sin(utils.toRadians(STATE.pendulum.angle));
            const bobY = this.centerY + STATE.pendulum.length * Math.cos(utils.toRadians(STATE.pendulum.angle));
            
            const dist = Math.sqrt((mouseX - bobX) ** 2 + (mouseY - bobY) ** 2);
            
            if (dist < 25 && !STATE.pendulum.isRunning) {
                isDragging = true;
            }
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const dx = mouseX - this.centerX;
            const dy = mouseY - this.centerY;
            
            let angle = utils.toDegrees(Math.atan2(dx, dy));
            angle = utils.clamp(angle, -80, 80);
            
            STATE.pendulum.angle = angle;
            DOM.pendulumAngleSlider.value = angle;
            DOM.pendulumAngleValue.textContent = Math.round(angle);
            
            this.draw();
        });
        
        this.canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    }
    
    start() {
        if (STATE.pendulum.isRunning) return;
        
        STATE.pendulum.isRunning = true;
        STATE.pendulum.angularVelocity = 0;
        STATE.pendulum.trail = [];
        STATE.pendulum.startTime = Date.now();
        STATE.pendulum.swingCount = 0;
        
        this.lastTime = Date.now();
        this.animate();
    }
    
    stop() {
        STATE.pendulum.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    reset() {
        this.stop();
        STATE.pendulum.angle = 30;
        STATE.pendulum.angularVelocity = 0;
        STATE.pendulum.angularAcceleration = 0;
        STATE.pendulum.trail = [];
        STATE.pendulum.swingCount = 0;
        
        DOM.pendulumAngleSlider.value = 30;
        DOM.pendulumAngleValue.textContent = '30';
        
        this.calculateTheoretical();
        this.draw();
    }
    
    calculateTheoretical() {
        const g = 9.8;
        const L = STATE.pendulum.length / 100; // Convert to meters
        
        const period = 2 * Math.PI * Math.sqrt(L / g);
        const frequency = 1 / period;
        
        DOM.periodSpan.textContent = utils.round(period, 3);
        DOM.frequencySpan.textContent = utils.round(frequency, 3);
    }
    
    animate() {
        if (!STATE.pendulum.isRunning) return;
        
        const currentTime = Date.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        const g = 9.8;
        const L = STATE.pendulum.length / 100;
        const angleRad = utils.toRadians(STATE.pendulum.angle);
        
        // Angular acceleration: α = -(g/L) * sin(θ)
        STATE.pendulum.angularAcceleration = -(g / L) * Math.sin(angleRad);
        
        // Update angular velocity: ω = ω + α * dt
        STATE.pendulum.angularVelocity += STATE.pendulum.angularAcceleration * deltaTime;
        
        // Apply damping
        STATE.pendulum.angularVelocity *= 0.999;
        
        // Update angle: θ = θ + ω * dt
        const newAngleRad = angleRad + STATE.pendulum.angularVelocity * deltaTime;
        STATE.pendulum.angle = utils.toDegrees(newAngleRad);
        
        // Calculate energies
        const m = STATE.pendulum.mass;
        const v = Math.abs(STATE.pendulum.angularVelocity * L);
        const h = L * (1 - Math.cos(angleRad));
        
        const kineticEnergy = 0.5 * m * v * v;
        const potentialEnergy = m * g * h;
        const totalEnergy = kineticEnergy + potentialEnergy;
        
        DOM.kineticEnergySpan.textContent = utils.round(kineticEnergy, 2);
        DOM.potentialEnergySpan.textContent = utils.round(potentialEnergy, 2);
        DOM.totalEnergySpan.textContent = utils.round(totalEnergy, 2);
        
        // Detect period (when pendulum crosses center)
        if (STATE.pendulum.angle * (STATE.pendulum.angle - STATE.pendulum.angularVelocity * deltaTime) < 0) {
            STATE.pendulum.swingCount++;
            if (STATE.pendulum.swingCount >= 2) {
                const measuredPeriod = (Date.now() - STATE.pendulum.startTime) / 1000;
                DOM.periodSpan.textContent = utils.round(measuredPeriod, 3);
                DOM.frequencySpan.textContent = utils.round(1 / measuredPeriod, 3);
                STATE.pendulum.startTime = Date.now();
                STATE.pendulum.swingCount = 0;
            }
        }
        
        this.draw();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Background
        this.ctx.fillStyle = '#f0f9ff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw trail
        if (STATE.pendulum.showTrail && STATE.pendulum.trail.length > 0) {
            this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            
            STATE.pendulum.trail.forEach((point, index) => {
                if (index === 0) {
                    this.ctx.moveTo(point.x, point.y);
                } else {
                    this.ctx.lineTo(point.x, point.y);
                }
            });
            
            this.ctx.stroke();
        }
        
        // Calculate bob position
        const bobX = this.centerX + STATE.pendulum.length * Math.sin(utils.toRadians(STATE.pendulum.angle));
        const bobY = this.centerY + STATE.pendulum.length * Math.cos(utils.toRadians(STATE.pendulum.angle));
        
        // Add to trail
        if (STATE.pendulum.isRunning && STATE.pendulum.showTrail) {
            STATE.pendulum.trail.push({ x: bobX, y: bobY });
            if (STATE.pendulum.trail.length > 200) {
                STATE.pendulum.trail.shift();
            }
        }
        
        // Draw reference lines
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(this.centerX, this.centerY + STATE.pendulum.length);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        // Draw string
        this.ctx.strokeStyle = '#475569';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(bobX, bobY);
        this.ctx.stroke();
        
        // Draw pivot point
        this.ctx.fillStyle = '#1e293b';
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 8, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw bob
        const radius = 15 + STATE.pendulum.mass * 2;
        const gradient = this.ctx.createRadialGradient(bobX - 5, bobY - 5, 5, bobX, bobY, radius);
        gradient.addColorStop(0, '#fbbf24');
        gradient.addColorStop(1, '#f59e0b');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(bobX, bobY, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#d97706';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Draw angle arc
        this.ctx.strokeStyle = '#ef4444';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(
            this.centerX,
            this.centerY,
            40,
            Math.PI / 2,
            Math.PI / 2 + utils.toRadians(STATE.pendulum.angle),
            STATE.pendulum.angle < 0
        );
        this.ctx.stroke();
        
        // Draw angle label
        this.ctx.fillStyle = '#ef4444';
        this.ctx.font = 'bold 14px sans-serif';
        this.ctx.fillText(Math.round(STATE.pendulum.angle) + '°', this.centerX + 20, this.centerY + 40);
    }
}

// ===========================
// SPRING (HOOKE'S LAW) EXPERIMENT
// ===========================
class Spring {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.centerX = canvas.width / 2;
        this.topY = 50;
        this.animationId = null;
        this.lastTime = Date.now();
        
        this.init();
    }
    
    init() {
        // Event listeners
        DOM.springConstantSlider.addEventListener('input', (e) => {
            STATE.spring.constant = parseFloat(e.target.value);
            DOM.springKValue.textContent = e.target.value;
        });
        
        DOM.springMassSlider.addEventListener('input', (e) => {
            STATE.spring.mass = parseFloat(e.target.value);
            DOM.springMassValue.textContent = e.target.value;
            this.reset();
        });
        
        DOM.dampingSlider.addEventListener('input', (e) => {
            STATE.spring.damping = parseFloat(e.target.value);
            DOM.dampingValue.textContent = e.target.value;
        });
        
        DOM.showForceVectorCheckbox.addEventListener('change', (e) => {
            STATE.spring.showForceVector = e.target.checked;
        });
        
        DOM.startSpringBtn.addEventListener('click', () => this.start());
        DOM.stopSpringBtn.addEventListener('click', () => this.stop());
        DOM.resetSpringBtn.addEventListener('click', () => this.reset());
        
        // Drag functionality
        this.setupDragAndDrop();
        
        this.reset();
    }
    
    setupDragAndDrop() {
        let isDragging = false;
        
        this.canvas.addEventListener('mousedown', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            
            const massY = this.topY + STATE.spring.naturalLength + STATE.spring.position;
            
            if (Math.abs(mouseY - massY) < 40) {
                isDragging = true;
                STATE.spring.isDragging = true;
                this.stop();
            }
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const rect = this.canvas.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            
            STATE.spring.position = utils.clamp(
                mouseY - this.topY - STATE.spring.naturalLength,
                -100,
                200
            );
            
            this.draw();
            this.updateData();
        });
        
        this.canvas.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                STATE.spring.isDragging = false;
                this.start();
            }
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                STATE.spring.isDragging = false;
            }
        });
    }
    
    start() {
        if (STATE.spring.isRunning) return;
        
        STATE.spring.isRunning = true;
        this.lastTime = Date.now();
        this.animate();
    }
    
    stop() {
        STATE.spring.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    reset() {
        this.stop();
        
        const g = 9.8;
        const equilibrium = (STATE.spring.mass * g) / STATE.spring.constant;
        
        STATE.spring.position = equilibrium * 100; // Convert to pixels
        STATE.spring.velocity = 0;
        
        this.draw();
        this.updateData();
    }
    
    animate() {
        if (!STATE.spring.isRunning || STATE.spring.isDragging) return;
        
        const currentTime = Date.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        const g = 9.8;
        const k = STATE.spring.constant;
        const m = STATE.spring.mass;
        
        // Calculate equilibrium position (in pixels)
        const equilibrium = (m * g) / k * 100;
        
        // Displacement from equilibrium
        const displacement = (STATE.spring.position - equilibrium) / 100; // Convert to meters
        
        // Hooke's law: F = -kx
        const springForce = -k * displacement;
        
        // Gravity force
        const gravityForce = m * g;
        
        // Net force
        const netForce = springForce + gravityForce;
        
        // Acceleration: a = F/m
        const acceleration = netForce / m;
        
        // Update velocity: v = v + a * dt
        STATE.spring.velocity += acceleration * deltaTime * 100; // Scale to pixels
        
        // Apply damping
        STATE.spring.velocity *= STATE.spring.damping;
        
        // Update position: x = x + v * dt
        STATE.spring.position += STATE.spring.velocity * deltaTime;
        
        // Constraints
        STATE.spring.position = utils.clamp(STATE.spring.position, -50, 300);
        
        this.draw();
        this.updateData();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    updateData() {
        const g = 9.8;
        const k = STATE.spring.constant;
        const m = STATE.spring.mass;
        
        const equilibrium = (m * g) / k * 100;
        const displacement = (STATE.spring.position - equilibrium) / 100;
        
        const springForce = -k * displacement;
        const gravityForce = m * g;
        const velocity = STATE.spring.velocity / 100;
        const acceleration = (springForce + gravityForce) / m;
        
        DOM.springDisplacementSpan.textContent = utils.round(Math.abs(displacement), 3);
        DOM.springForceSpan.textContent = utils.round(Math.abs(springForce), 2);
        DOM.weightForceSpan.textContent = utils.round(gravityForce, 2);
        DOM.springVelocitySpan.textContent = utils.round(Math.abs(velocity), 2);
        DOM.springAccelerationSpan.textContent = utils.round(Math.abs(acceleration), 2);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Background
        this.ctx.fillStyle = '#fef3c7';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw ceiling
        this.ctx.fillStyle = '#9ca3af';
        this.ctx.fillRect(0, 0, this.canvas.width, 30);
        
        // Draw ceiling pattern
        for (let i = 0; i < this.canvas.width; i += 20) {
            this.ctx.strokeStyle = '#6b7280';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(i, 30);
            this.ctx.lineTo(i + 10, 0);
            this.ctx.stroke();
        }
        
        // Calculate mass position
        const massY = this.topY + STATE.spring.naturalLength + STATE.spring.position;
        
        // Draw spring
        this.drawSpring(this.centerX, this.topY, massY);
        
        // Draw mass
        const massWidth = 80;
        const massHeight = 40;
        
        const gradient = this.ctx.createLinearGradient(
            this.centerX - massWidth / 2,
            massY - massHeight / 2,
            this.centerX + massWidth / 2,
            massY + massHeight / 2
        );
        gradient.addColorStop(0, '#94a3b8');
        gradient.addColorStop(1, '#64748b');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(
            this.centerX - massWidth / 2,
            massY - massHeight / 2,
            massWidth,
            massHeight
        );
        
        this.ctx.strokeStyle = '#475569';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(
            this.centerX - massWidth / 2,
            massY - massHeight / 2,
            massWidth,
            massHeight
        );
        
        // Draw mass label
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 16px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(STATE.spring.mass + 'kg', this.centerX, massY + 25);
        
        // Draw force vectors
        if (STATE.spring.showForceVector) {
            const g = 9.8;
            const k = STATE.spring.constant;
            const m = STATE.spring.mass;
            
            const equilibrium = (m * g) / k * 100;
            const displacement = (STATE.spring.position - equilibrium) / 100;
            const springForce = -k * displacement;
            const gravityForce = m * g;
            
            const scale = 3;
            
            // Spring force vector (upward)
            if (Math.abs(springForce) > 0.1) {
                this.drawForceVector(
                    this.centerX + 50,
                    massY,
                    0,
                    -springForce * scale,
                    '#3b82f6',
                    'Fs'
                );
            }
            
            // Gravity force vector (downward)
            this.drawForceVector(
                this.centerX - 50,
                massY,
                0,
                gravityForce * scale,
                '#ef4444',
                'Fg'
            );
        }
        
        // Draw equilibrium line
        const g = 9.8;
        const equilibrium = (STATE.spring.mass * g) / STATE.spring.constant * 100;
        const eqY = this.topY + STATE.spring.naturalLength + equilibrium;
        
        this.ctx.strokeStyle = '#10b981';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(this.centerX - 120, eqY);
        this.ctx.lineTo(this.centerX + 120, eqY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        this.ctx.fillStyle = '#10b981';
        this.ctx.font = '12px sans-serif';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Posisi Kesetimbangan', this.centerX + 130, eqY + 5);
    }
    
    drawSpring(x, startY, endY) {
        const coils = 15;
        const amplitude = 20;
        const springLength = endY - startY;
        const coilHeight = springLength / coils;
        
        this.ctx.strokeStyle = '#475569';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, startY);
        
        for (let i = 0; i <= coils; i++) {
            const y = startY + i * coilHeight;
            const offset = (i % 2 === 0) ? amplitude : -amplitude;
            
            if (i === 0 || i === coils) {
                this.ctx.lineTo(x, y);
            } else {
                this.ctx.lineTo(x + offset, y);
            }
        }
        
        this.ctx.lineTo(x, endY);
        this.ctx.stroke();
    }
    
    drawForceVector(x, y, dx, dy, color, label) {
        const endX = x + dx;
        const endY = y + dy;
        
        // Vector line
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        
        // Arrow head
        const headLength = 12;
        const angle = Math.atan2(dy, dx);
        
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(endX, endY);
        this.ctx.lineTo(
            endX - headLength * Math.cos(angle - Math.PI / 6),
            endY - headLength * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            endX - headLength * Math.cos(angle + Math.PI / 6),
            endY - headLength * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();
        
        // Label
        this.ctx.fillStyle = color;
        this.ctx.font = 'bold 14px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label, endX, endY + (dy > 0 ? 20 : -10));
    }
}

// ===========================
// Initialize Application
// ===========================
function init() {
    // Initialize tabs
    initializeTabs();
    
    // Initialize experiments
    const projectileMotion = new ProjectileMotion(DOM.projectileCanvas);
    const pendulum = new Pendulum(DOM.pendulumCanvas);
    const spring = new Spring(DOM.springCanvas);
    
    console.log('Virtual Lab Fisika initialized successfully!');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

`