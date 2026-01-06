import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  StyleSheet, 
  Dimensions,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState, memo } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

// KOMPONEN INPUT MODERN
const ModernInput = memo(({ 
  label, 
  value, 
  onChange, 
  type, 
  placeholder, 
  activeInput, 
  setActiveInput 
}: any) => {
  const isActive = activeInput === type;
  const isPassword = type === 'password';

  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.inputLabel, isActive && { color: '#4F46E5' }]}>{label}</Text>
      <View 
        style={[
          styles.inputGlass,
          isActive && { borderColor: '#4F46E5', backgroundColor: '#FFFFFF' }
        ]}
      >
        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 18 }}>{isPassword ? '🔐' : '📧'}</Text>
        </View>
        
        <TextInput 
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          onFocus={() => setActiveInput(type)}
          onBlur={() => setActiveInput(null)}
          style={styles.textInput}
          autoCapitalize="none"
          secureTextEntry={isPassword}
          keyboardType={isPassword ? 'default' : 'email-address'}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
});

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert('Peringatan', 'Mohon lengkapi email dan password.');
        return;
    }

    setLoading(true);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        const userData = {
            name: user.displayName || user.email?.split('@')[0], 
            email: user.email,
            uid: user.uid
        };

        router.replace({
            pathname: '/',
            params: { user: JSON.stringify(userData) } 
        });
    } catch (error: any) {
        Alert.alert('Login Gagal', 'Email atau password yang Anda masukkan salah.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      {/* BACKGROUND ORNAMENT */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            
            {/* HEADER SECTION */}
            <View style={styles.headerSection}>
              <View style={styles.logoContainer}>
                <Text style={styles.logoEmoji}>⚛️</Text>
              </View>
              <Text style={styles.mainTitle}>Virtual Lab</Text>
              <Text style={styles.subTitleText}>Pusat Eksperimen Fisika Digital</Text>
            </View>

            {/* FORM CARD */}
            <View style={styles.cardContainer}>
              <Text style={styles.cardHeaderTitle}>Selamat Datang</Text>
              <Text style={styles.cardHeaderSub}>Gunakan akun TPB ITB Anda</Text>

              <ModernInput 
                label="Alamat Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="nim@mahasiswa.itb.ac.id"
                activeInput={activeInput}
                setActiveInput={setActiveInput}
              />

              <ModernInput 
                label="Kata Sandi"
                value={password}
                onChange={setPassword}
                type="password"
                placeholder="••••••••"
                activeInput={activeInput}
                setActiveInput={setActiveInput}
              />

              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Lupa Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.primaryBtn, loading && styles.btnDisabled]} 
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.primaryBtnText}>MASUK KE LAB</Text>
                )}
              </TouchableOpacity>
            </View>

            {/* FOOTER */}
            <View style={styles.footerSection}>
              <Text style={styles.footerText}>Belum punya akses? </Text>
              <TouchableOpacity onPress={() => Alert.alert('Akses Lab', 'Hubungi koordinator asisten praktikum.')}>
                <Text style={styles.footerLink}>Hubungi Admin</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: height * 0.1,
    paddingBottom: 40,
    alignItems: 'center',
  },
  // BACKGROUND ORNAMENTS
  bgCircle1: {
    position: 'absolute',
    top: -100,
    left: -50,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#EEF2FF',
  },
  bgCircle2: {
    position: 'absolute',
    top: height * 0.4,
    right: -100,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#F5F3FF', // Violet 50
  },
  // HEADER
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 8,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  logoEmoji: {
    fontSize: 35,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: -0.5,
  },
  subTitleText: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
  },
  // CARD
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 24,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  cardHeaderTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  cardHeaderSub: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 24,
  },
  // INPUTS
  inputWrapper: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputGlass: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    shadowOpacity: 0.1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotText: {
    fontSize: 13,
    color: '#6366F1',
    fontWeight: '700',
  },
  // BUTTONS
  primaryBtn: {
    backgroundColor: '#4F46E5', // Indigo 600
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  btnDisabled: {
    opacity: 0.7,
  },
  primaryBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
  // FOOTER
  footerSection: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    color: '#64748B',
    fontSize: 14,
  },
  footerLink: {
    color: '#4F46E5',
    fontWeight: '800',
    fontSize: 14,
  },
});