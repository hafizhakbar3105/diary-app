
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  mood,
}) {
  // Pilihan warna berdasarkan mood
  const moodColors = {
    happy: {
      border: '#F3C76A',
      background: '#FFFBEB',
    },
    focus: {
      border: '#93C5FD',
      background: '#EFF6FF',
    },
    calm: {
      border: '#86D8A5',
      background: '#F0FDF4',
    },
    excited: {
      border: '#F9A8C5',
      background: '#FDF2F8',
    },
    tired: {
      border: '#C4B5FD',
      background: '#F5F3FF',
    },
  };

  const selectedMood = moodColors[mood] || {
    border: '#E5E7EB',
    background: '#FFFFFF',
  };

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: selectedMood.border,
          backgroundColor: selectedMood.background,
        },
      ]}
    >
      <Image
        source={
          typeof moodUri === 'string'
            ? { uri: moodUri }
            : moodUri
        }
        style={styles.mood}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.date}>{date}</Text>

        <Text
          style={styles.preview}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderWidth: 1.5,
    borderRadius: 16,
    marginBottom: 14,

    // Bayangan kartu
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#273244',
    marginBottom: 3,
  },

  date: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 6,
  },

  preview: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
