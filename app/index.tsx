import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { cssCode, jsCode } from './_web-sources';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const router = useRouter();

  const params = useLocalSearchParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (params.user) {
      try {
        const user = JSON.parse(params.user as string);
        setUserData(user);
      } catch (e) {
        console.error("Gagal parsing user data", e);
      }
    }
  }, [params.user]);

  const injectedUserVar = JSON.stringify(userData);
  const extraCss = `
    /* Layout Header Flexbox */
    .navbar .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    /* Agar logo dan tagline tetap rapi di kiri */
    .logo-group { 
        display: flex; 
        flex-direction: column; 
    }

    /* Wadah Tombol Login/Profil */
    #auth-container {
        display: flex;
        align-items: center;
        margin-left: auto; /* Dorong ke kanan mentok */
    }

    /* Style Tombol Login */
    .btn-login {
        background: white;
        color: #2563eb;
        border: 2px solid #2563eb;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 14px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .btn-login:hover { background: #2563eb; color: white; }

    /* Style User Profile (Avatar + Nama) */
    .user-profile {
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(255,255,255,0.9);
        padding: 5px 15px;
        border-radius: 25px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
    }
    .btn-logout {
        background: #fee2e2;
        color: #ef4444;
        border: none;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        margin-left: 10px;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .btn-logout:hover { background: #fecaca; }

    .user-profile {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255,255,255,0.95);
        padding: 4px 6px 4px 12px; /* Padding disesuaikan */
        border-radius: 25px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
    }
    .user-name { 
        font-weight: 700; 
        color: #1e293b; 
        font-size: 0.9rem; 
    }
    .user-avatar {
        background: #2563eb;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }

    /* Responsif HP */
    @media (max-width: 600px) {
       .tagline { display: none; } /* Sembunyikan tagline di HP biar muat */
       .logo { font-size: 1.1rem; }
       .user-name { display: none; } /* Di HP cuma muncul ikon orang */
       .btn-login { padding: 6px 12px; font-size: 12px; }
    }
  `;

 // --- GANTI authLogicScript DENGAN INI ---
  const authLogicScript = `
    const CURRENT_USER = ${injectedUserVar};
    const INJECTED_STYLES = \`${extraCss}\`;

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = INJECTED_STYLES + \`
            #auth-container { position: relative; z-index: 2147483647; }
        \`;
        document.head.appendChild(style);
    }

    // Fungsi kirim pesan (Login & Logout)
    function sendMessageToNative(msg) {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(msg);
        } else if (window.postMessage.length !== 1) {
            window.postMessage(msg, '*');
        } else {
            // Retry mechanism
            setTimeout(() => {
                if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage(msg);
            }, 500);
        }
    }

    window.sendLoginSignal = () => sendMessageToNative('LOGIN_REQUEST');
    
    // --- TAMBAHAN: FUNGSI LOGOUT ---
    window.sendLogoutSignal = () => {
        if(confirm('Yakin ingin keluar?')) {
            sendMessageToNative('LOGOUT_REQUEST');
        }
    };

    function renderAuthHeader() {
        const container = document.getElementById('auth-container');
        if (!container) return;
        
        container.innerHTML = '';

        if (CURRENT_USER) {
            // --- TAMPILAN JIKA LOGIN (ADA TOMBOL LOGOUT) ---
            container.innerHTML = \`
                <div class="user-profile">
                    <span class="user-name">\${CURRENT_USER.name || 'User'}</span>
                    <div class="user-avatar">👤</div>
                    <button class="btn-logout" onclick="window.sendLogoutSignal()">
                        Keluar
                    </button>
                </div>
            \`;
        } else {
            // --- TAMPILAN JIKA BELUM LOGIN ---
            container.innerHTML = \`
                <button 
                    id="btn-login-header" 
                    class="btn-login" 
                    onclick="window.sendLoginSignal()"
                    ontouchend="window.sendLoginSignal()">
                    🔑 Masuk
                </button>
            \`;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        renderAuthHeader();

        // Block simulasi jika belum login
        const actionButtons = document.querySelectorAll('button[id*="start"], button[id*="launch"]');
        actionButtons.forEach(btn => {
            const blockAndLogin = (e) => {
                if (!CURRENT_USER) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    window.sendLoginSignal();
                }
            };
            btn.addEventListener('click', blockAndLogin, true);
            btn.addEventListener('touchend', blockAndLogin, true);
        });
    });
  `;

  // HTML LENGKAP (index.html) ---
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <style>${cssCode}</style>
    </head>
    <body>
      <header class="main-header">
        <nav class="navbar">
            <div class="container">
                <div class="logo-group">
                    <h1 class="logo">
                        <span class="logo-icon">⚛️</span>
                        Virtual Lab
                    </h1>
                    <p class="tagline">Media Pembelajaran Interaktif</p>
                </div>
                
                <div id="auth-container">
                    </div>
            </div>
        </nav>
      </header>

    <main class="main-content">
        <section class="hero">
            <div class="container">
                <h2>Selamat Datang di Virtual Lab Fisika</h2>
                <p>Eksplorasi konsep fisika melalui simulasi interaktif berbasis web</p>
            </div>
        </section>

        <section class="experiments-section">
            <div class="container">
                <h2 class="section-title">Pilih Eksperimen</h2>
                <div class="experiment-tabs">
                    <button class="tab-btn active" data-experiment="projectile">
                        🎯 Gerak Parabola
                    </button>
                    <button class="tab-btn" data-experiment="pendulum">
                        ⚖️ Pendulum Sederhana
                    </button>
                    <button class="tab-btn" data-experiment="spring">
                        🔗 Hukum Hooke
                    </button>
                </div>

                <!-- Eksperimen 1: Gerak Parabola -->
                <article id="projectile-experiment" class="experiment-container active">
                    <header class="experiment-header">
                        <h3>Simulasi Gerak Parabola</h3>
                        <p>Pelajari tentang gerak proyektil dengan mengubah kecepatan awal dan sudut peluncuran</p>
                    </header>

                    <div class="experiment-workspace">
                        <aside class="controls-panel">
                            <div class="control-group">
                                <label for="velocity">
                                    Kecepatan Awal (v₀): <span id="velocity-value">50</span> m/s
                                </label>
                                <input type="range" id="velocity" min="10" max="100" value="50" step="1">
                            </div>

                            <div class="control-group">
                                <label for="angle">
                                    Sudut Peluncuran (θ): <span id="angle-value">45</span>°
                                </label>
                                <input type="range" id="angle" min="0" max="90" value="45" step="1">
                            </div>

                            <div class="control-group">
                                <label for="gravity">
                                    Gravitasi (g): <span id="gravity-value">9.8</span> m/s²
                                </label>
                                <input type="range" id="gravity" min="1" max="20" value="9.8" step="0.1">
                            </div>

                            <div class="button-group">
                                <button id="launch-btn" class="btn btn-primary">🚀 Luncurkan</button>
                                <button id="reset-projectile" class="btn btn-secondary">↺ Reset</button>
                            </div>

                            <div class="info-panel">
                                <h4>Data Eksperimen:</h4>
                                <ul class="data-list">
                                    <li>Jarak Maksimum: <span id="max-range">0</span> m</li>
                                    <li>Tinggi Maksimum: <span id="max-height">0</span> m</li>
                                    <li>Waktu Tempuh: <span id="flight-time">0</span> s</li>
                                    <li>Kecepatan Akhir: <span id="final-velocity">0</span> m/s</li>
                                </ul>
                            </div>
                        </aside>

                        <div class="canvas-container">
                            <canvas id="projectile-canvas" width="800" height="500"></canvas>
                            <div class="canvas-overlay">
                                <div class="trajectory-info">Klik "Luncurkan" untuk memulai simulasi</div>
                            </div>
                        </div>
                    </div>

                    <footer class="experiment-footer">
                        <details class="theory-section">
                            <summary>📚 Teori Gerak Parabola</summary>
                            <div class="theory-content">
                                <p><strong>Gerak parabola</strong> adalah gerak dua dimensi yang merupakan perpaduan antara gerak lurus beraturan (GLB) pada sumbu horizontal dan gerak lurus berubah beraturan (GLBB) pada sumbu vertikal.</p>
                                <h5>Rumus-rumus:</h5>
                                <ul>
                                    <li>Jarak maksimum: R = (v₀² × sin(2θ)) / g</li>
                                    <li>Tinggi maksimum: H = (v₀² × sin²(θ)) / (2g)</li>
                                    <li>Waktu tempuh: t = (2v₀ × sin(θ)) / g</li>
                                    <li>Posisi x: x(t) = v₀ × cos(θ) × t</li>
                                    <li>Posisi y: y(t) = v₀ × sin(θ) × t - ½gt²</li>
                                </ul>
                            </div>
                        </details>
                    </footer>
                </article>

                <!-- Eksperimen 2: Pendulum -->
                <article id="pendulum-experiment" class="experiment-container">
                    <header class="experiment-header">
                        <h3>Simulasi Pendulum Sederhana</h3>
                        <p>Amati gerak harmonik sederhana dengan mengubah panjang tali dan sudut awal</p>
                    </header>

                    <div class="experiment-workspace">
                        <aside class="controls-panel">
                            <div class="control-group">
                                <label for="pendulum-length">
                                    Panjang Tali (L): <span id="length-value">200</span> px
                                </label>
                                <input type="range" id="pendulum-length" min="100" max="300" value="200" step="10">
                            </div>

                            <div class="control-group">
                                <label for="pendulum-angle">
                                    Sudut Awal (θ₀): <span id="pendulum-angle-value">30</span>°
                                </label>
                                <input type="range" id="pendulum-angle" min="5" max="80" value="30" step="5">
                            </div>

                            <div class="control-group">
                                <label for="pendulum-mass">
                                    Massa Bandul (m): <span id="mass-value">5</span> kg
                                </label>
                                <input type="range" id="pendulum-mass" min="1" max="10" value="5" step="1">
                            </div>

                            <div class="control-group">
                                <label>
                                    <input type="checkbox" id="show-trail" checked>
                                    Tampilkan Jejak Gerak
                                </label>
                            </div>

                            <div class="button-group">
                                <button id="start-pendulum" class="btn btn-primary">▶️ Mulai</button>
                                <button id="stop-pendulum" class="btn btn-warning">⏸️ Pause</button>
                                <button id="reset-pendulum" class="btn btn-secondary">↺ Reset</button>
                            </div>

                            <div class="info-panel">
                                <h4>Data Eksperimen:</h4>
                                <ul class="data-list">
                                    <li>Periode (T): <span id="period">0</span> s</li>
                                    <li>Frekuensi (f): <span id="frequency">0</span> Hz</li>
                                    <li>Energi Kinetik: <span id="kinetic-energy">0</span> J</li>
                                    <li>Energi Potensial: <span id="potential-energy">0</span> J</li>
                                    <li>Energi Total: <span id="total-energy">0</span> J</li>
                                </ul>
                            </div>
                        </aside>

                        <div class="canvas-container">
                            <canvas id="pendulum-canvas" width="800" height="500"></canvas>
                            <div class="canvas-overlay">
                                <div class="drag-hint">🖱️ Drag bandul untuk mengubah posisi awal</div>
                            </div>
                        </div>
                    </div>

                    <footer class="experiment-footer">
                        <details class="theory-section">
                            <summary>📚 Teori Pendulum Sederhana</summary>
                            <div class="theory-content">
                                <p><strong>Pendulum sederhana</strong> adalah suatu benda yang digantung pada seutas tali yang dapat berayun bebas. Gerak pendulum merupakan contoh gerak harmonik sederhana.</p>
                                <h5>Rumus-rumus:</h5>
                                <ul>
                                    <li>Periode: T = 2π√(L/g)</li>
                                    <li>Frekuensi: f = 1/T = (1/2π)√(g/L)</li>
                                    <li>Energi Kinetik: Ek = ½mv²</li>
                                    <li>Energi Potensial: Ep = mgh</li>
                                    <li>Gaya Pemulih: F = -mg sin(θ)</li>
                                </ul>
                                <p><em>Catatan: Untuk sudut kecil (θ < 15°), sin(θ) ≈ θ (dalam radian)</em></p>
                            </div>
                        </details>
                    </footer>
                </article>

                <!-- Eksperimen 3: Hukum Hooke -->
                <article id="spring-experiment" class="experiment-container">
                    <header class="experiment-header">
                        <h3>Simulasi Hukum Hooke (Pegas)</h3>
                        <p>Pelajari hubungan antara gaya, konstanta pegas, dan pertambahan panjang pegas</p>
                    </header>

                    <div class="experiment-workspace">
                        <aside class="controls-panel">
                            <div class="control-group">
                                <label for="spring-constant">
                                    Konstanta Pegas (k): <span id="spring-k-value">50</span> N/m
                                </label>
                                <input type="range" id="spring-constant" min="10" max="200" value="50" step="10">
                            </div>

                            <div class="control-group">
                                <label for="spring-mass">
                                    Massa Beban (m): <span id="spring-mass-value">2</span> kg
                                </label>
                                <input type="range" id="spring-mass" min="0.5" max="10" value="2" step="0.5">
                            </div>

                            <div class="control-group">
                                <label for="damping">
                                    Redaman: <span id="damping-value">0.98</span>
                                </label>
                                <input type="range" id="damping" min="0.90" max="0.99" value="0.98" step="0.01">
                            </div>

                            <div class="control-group">
                                <label>
                                    <input type="checkbox" id="show-force-vector" checked>
                                    Tampilkan Vektor Gaya
                                </label>
                            </div>

                            <div class="button-group">
                                <button id="start-spring" class="btn btn-primary">▶️ Mulai</button>
                                <button id="stop-spring" class="btn btn-warning">⏸️ Pause</button>
                                <button id="reset-spring" class="btn btn-secondary">↺ Reset</button>
                            </div>

                            <div class="info-panel">
                                <h4>Data Eksperimen:</h4>
                                <ul class="data-list">
                                    <li>Pertambahan Panjang (Δx): <span id="spring-displacement">0</span> m</li>
                                    <li>Gaya Pegas (F): <span id="spring-force">0</span> N</li>
                                    <li>Gaya Berat (W): <span id="weight-force">0</span> N</li>
                                    <li>Kecepatan (v): <span id="spring-velocity">0</span> m/s</li>
                                    <li>Percepatan (a): <span id="spring-acceleration">0</span> m/s²</li>
                                </ul>
                            </div>
                        </aside>

                        <div class="canvas-container">
                            <canvas id="spring-canvas" width="800" height="500"></canvas>
                            <div class="canvas-overlay">
                                <div class="drag-hint">🖱️ Drag beban untuk meregangkan atau menekan pegas</div>
                            </div>
                        </div>
                    </div>

                    <footer class="experiment-footer">
                        <details class="theory-section">
                            <summary>📚 Teori Hukum Hooke</summary>
                            <div class="theory-content">
                                <p><strong>Hukum Hooke</strong> menyatakan bahwa gaya yang diperlukan untuk menekan atau meregangkan pegas berbanding lurus dengan pertambahan panjang pegas tersebut.</p>
                                <h5>Rumus-rumus:</h5>
                                <ul>
                                    <li>Hukum Hooke: F = -kΔx</li>
                                    <li>Gaya Pemulih: F = -kx (tanda negatif menunjukkan arah gaya berlawanan dengan simpangan)</li>
                                    <li>Energi Potensial Pegas: Ep = ½kx²</li>
                                    <li>Periode Osilasi: T = 2π√(m/k)</li>
                                    <li>Frekuensi: f = (1/2π)√(k/m)</li>
                                </ul>
                                <p><em>Dimana: F = gaya (N), k = konstanta pegas (N/m), x = pertambahan panjang (m), m = massa (kg)</em></p>
                            </div>
                        </details>
                    </footer>
                </article>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Tentang Virtual Lab</h4>
                    <p>Virtual Lab Fisika adalah media pembelajaran interaktif berbasis web yang dikembangkan untuk mahasiswa TPB ITB dalam memahami konsep-konsep fisika melalui simulasi visual.</p>
                </div>
                <div class="footer-section">
                    <h4>Fitur</h4>
                    <ul>
                        <li>✓ Simulasi real-time dengan HTML5 Canvas</li>
                        <li>✓ Kontrol interaktif dengan drag & drop</li>
                        <li>✓ Visualisasi data eksperimen</li>
                        <li>✓ Responsive design untuk semua perangkat</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Teknologi</h4>
                    <ul>
                        <li>HTML5 Semantic Elements</li>
                        <li>CSS3 Animations & Grid/Flexbox</li>
                        <li>JavaScript ES6+ & Canvas API</li>
                        <li>Physics Engine Custom</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Virtual Lab Fisika - TPB ITB. Dibuat untuk tujuan pembelajaran.</p>
            </div>
        </div>
    </footer>

    <script>${authLogicScript}</script>
    <script>${jsCode}</script>
    </body>
    </html>
  `;

  const handleWebViewMessage = (event: any) => {
    const data = event.nativeEvent.data;
    console.log("Pesan dari WebView:", data); 

    if (data === 'LOGIN_REQUEST') {
        router.push('/login');
    }
    
    // --- TAMBAHAN: HANDLE LOGOUT ---
    if (data === 'LOGOUT_REQUEST') {
        // 1. Kosongkan state lokal
        setUserData(null);
        
        // 2. Bersihkan params di URL agar tidak login otomatis saat refresh
        router.setParams({ user: '' });
        
        // (Opsional) Jika pakai Firebase Auth, tambahkan: auth.signOut();
    }
  };
  if (Platform.OS === 'web') {
    // Kalau WEB, pakai IFRAME (karena WebView gak support web)
    return (
      <View style={styles.container}>
        <iframe
          srcDoc={htmlContent}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Virtual Lab"
        />
      </View>
    );
  } else {
    // Kalau NATIVE (Android/iOS), pakai WEBVIEW
    return (
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scrollEnabled={true}
          onMessage={handleWebViewMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Gunakan StatusBar.currentHeight agar pas di semua Android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});