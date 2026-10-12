
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import happy from '../../assets/moods/happy.png';
import tiktok from '../../assets/moods/tiktok.png';

// Data daftar diary
const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: tiktok,
    mood: 'happy',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    mood: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    mood: 'calm',
  },
  {
    id: 4,
    title: 'Hari yang Menyenangkan',
    date: '2025-10-03',
    preview:
      'Hari ini aku menghabiskan waktu bersama teman-teman. Banyak cerita dan pengalaman seru...',
    moodUri: 'https://picsum.photos/seed/excited/80',
    mood: 'excited',
  },
  {
    id: 5,
    title: 'Malam yang Melelahkan',
    date: '2025-10-02',
    preview:
      'Setelah menyelesaikan berbagai tugas kuliah, akhirnya aku bisa beristirahat dengan tenang...',
    moodUri: 'https://picsum.photos/seed/tired/80',
    mood: 'tired',
  },
];

// Komponen utama halaman Diary
export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Buku Harian */}
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text style={styles.header}>Buku Harian</Text>

          <Text style={styles.subtitle}>
            Catatan kegiatan sehari-hari
          </Text>
        </View>

        {/* Avatar menggunakan gambar happy.png */}
        <Image
          source={happy}
          style={styles.avatar}
        />
      </View>

      {/* Daftar kartu diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

// Styling halaman Diary
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF',
  },

  content: {
    padding: 16,
    paddingBottom: 30,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',

    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  headerText: {
    flex: 1,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#273244',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 13,
    color: '#6B7280',
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#F3C76A',
    marginLeft: 12,
  },
});
