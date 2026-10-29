document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. PILAH SAMPAH GAME LOGIC
    // ==========================================
    const wasteData = [
        { name: 'Sisa Sayur', type: 'organik', icon: 'fa-leaf' },
        { name: 'Botol Plastik', type: 'anorganik', icon: 'fa-bottle-water' },
        { name: 'Baterai Bekas', type: 'b3', icon: 'fa-battery-full' },
        { name: 'Tisu Basah', type: 'residu', icon: 'fa-toilet-paper' },
        { name: 'Kulit Pisang', type: 'organik', icon: 'fa-apple-whole' },
        { name: 'Kaleng Minuman', type: 'anorganik', icon: 'fa-prescription-bottle' },
        { name: 'Lampu Neon', type: 'b3', icon: 'fa-lightbulb' },
        { name: 'Pembalut Bekas', type: 'residu', icon: 'fa-box-tissue' }
    ];

    let currentItems = [...wasteData];
    let score = 0;
    let selectedItem = null;

    const wasteContainer = document.getElementById('waste-source');
    const scoreDisplay = document.getElementById('score');
    const countDisplay = document.getElementById('item-count');
    const resetButton = document.getElementById('reset-game');
<<<<<<< HEAD
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.menu-btn');
=======
>>>>>>> a6fa5b4129311d0f2e39961c765f0774c1466ba7

    // Element Modal Pop-up Feedback
    const modal = document.getElementById('game-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalBtnRetry = document.getElementById('modal-btn-retry');
    const modalBtnRestart = document.getElementById('modal-btn-restart');

    // Sound Generator (Web Audio API)
    function playSound(isCorrect) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (isCorrect) {
                osc.frequency.setValueAtTime(587.33, ctx.currentTime);
                osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
            } else {
                osc.frequency.setValueAtTime(200, ctx.currentTime);
                osc.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
            }

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } catch (e) {}
    }

    function showModal(title, message, type = 'wrong') {
        modalTitle.textContent = title;
        modalMessage.textContent = message;

        if (type === 'wrong') {
            modalIcon.className = 'modal-icon wrong';
            modalIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        } else {
            modalIcon.className = 'modal-icon info';
            modalIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        }

        modal.classList.add('active');
    }

    function hideModal() {
        modal.classList.remove('active');
    }

    function initGame() {
        score = 0;
        selectedItem = null;
        currentItems = [...wasteData].sort(() => Math.random() - 0.5);
        updateScoreBoard();
        renderItems();
        hideModal();
    }

    function updateScoreBoard() {
        scoreDisplay.textContent = score;
        countDisplay.textContent = currentItems.length;
    }

    function renderItems() {
        wasteContainer.innerHTML = '';
        
        if (currentItems.length === 0) {
            wasteContainer.innerHTML = '<p style="color: #588b35; font-weight: 600;">Selamat! Semua sampah telah dipilah dengan benar 🎉</p>';
            return;
        }

        currentItems.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'waste-item';
            itemEl.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.name}`;

            itemEl.addEventListener('click', () => {
                document.querySelectorAll('.waste-item').forEach(el => el.classList.remove('selected'));
                itemEl.classList.add('selected');
                selectedItem = { ...item, index };
            });

            wasteContainer.appendChild(itemEl);
        });
    }

    document.querySelectorAll('.bin').forEach(bin => {
        bin.addEventListener('click', () => {
            if (!selectedItem) {
                showModal('Pilih Sampah', 'Silakan klik salah satu sampah terlebih dahulu sebelum memilih tempat sampah!', 'info');
                return;
            }

            const binType = bin.dataset.type;

            if (selectedItem.type === binType) {
                score += 10;
                playSound(true);
                currentItems.splice(selectedItem.index, 1);
                selectedItem = null;
                updateScoreBoard();
                renderItems();
            } else {
                score = Math.max(0, score - 5);
                playSound(false);
                updateScoreBoard();
                showModal(
                    'Jawaban Kurang Tepat!', 
                    `${selectedItem.name} tergolong jenis sampah ${selectedItem.type.toUpperCase()}. Yuk coba lagi!`,
                    'wrong'
                );
            }
        });
    });

    modalBtnRetry.addEventListener('click', hideModal);
    modalBtnRestart.addEventListener('click', initGame);
    resetButton.addEventListener('click', initGame);

<<<<<<< HEAD
    menuButton.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('nav-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
        menuButton.innerHTML = `<i class="fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}"></i>`;
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Buka menu navigasi');
            menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

=======
>>>>>>> a6fa5b4129311d0f2e39961c765f0774c1466ba7
    // ==========================================
    // 2. TABS & KALKULATOR DAMPAK
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    const calculateBtn = document.getElementById('btn-calculate');
    const inputOrganik = document.getElementById('input-organik');
    const inputAnorganik = document.getElementById('input-anorganik');

    const co2Result = document.getElementById('co2-result');
    const compostResult = document.getElementById('compost-result');
    const recycleResult = document.getElementById('recycle-result');

    function calculateImpact() {
        const organikKg = parseFloat(inputOrganik.value) || 0;
        const anorganikKg = parseFloat(inputAnorganik.value) || 0;

        const monthlyOrganik = organikKg * 30;
        const monthlyAnorganik = anorganikKg * 30;

        // Perhitungan matematika dampak lingkungan
        const compost = (monthlyOrganik * 0.5).toFixed(1);
        const recycled = (monthlyAnorganik * 0.8).toFixed(1);
        const co2Saved = ((monthlyOrganik * 0.25) + (monthlyAnorganik * 1.5)).toFixed(1);

        // Helper function untuk format ribuan bahasa Indonesia (Contoh: 1234567.5 -> 1.234.567,5)
        const formatNumber = (numStr) => {
            const num = parseFloat(numStr);
            return num.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
        };

        // Render data hasil ke elemen HTML dengan format rapi
        co2Result.textContent = `${formatNumber(co2Saved)} kg`;
        compostResult.textContent = `${formatNumber(compost)} kg`;
        recycleResult.textContent = `${formatNumber(recycled)} kg`;
    }

    calculateBtn.addEventListener('click', calculateImpact);

    // Initialize
    initGame();
    calculateImpact();
});
