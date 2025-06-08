import { useLocalSearchParams, router } from 'expo-router';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, H2, H4, Paragraph, YStack, XStack } from 'tamagui';
import { boatsData, type Boat } from '@/data/boats';

export default function BoatDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const cottage = boatsData.find((c: Boat) => c.id === id);

  if (!cottage) {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <H2>Cottage not found</H2>
          <View style={styles.buttonContainer}>
            <Button onPress={() => router.back()}>Go Back</Button>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Image source={{ uri: cottage.image }} style={styles.image} />

          <View style={styles.content}>
            <View style={styles.header}>
              <H2>{cottage.title}</H2>
              <H4>{cottage.price}</H4>
            </View>

            <Paragraph style={styles.description}>
              {cottage.description}
            </Paragraph>

            <View style={styles.cardContainer}>
              <Card style={styles.card}>
                <View style={styles.cardHeader}>
                  <H4>Amenities</H4>
                </View>
                <View style={styles.amenitiesList}>
                  {cottage.amenities?.map((amenity, index) => (
                    <Paragraph key={index} style={styles.amenityItem}>
                      • {amenity}
                    </Paragraph>
                  ))}
                </View>
              </Card>
            </View>

            <Card style={styles.card}>
              <View style={styles.cardHeader}>
                <H4>Availability</H4>
              </View>
              <Paragraph style={styles.availabilityText}>
                {cottage.availability}
              </Paragraph>
            </Card>

            <View style={styles.buttonsContainer}>
              <Button style={styles.button} onPress={() => router.back()}>
                Back to List
              </Button>
              <Button style={styles.button}>Book Now</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
  },
  cardContainer: {
    marginTop: 8,
  },
  card: {
    padding: 12,
    marginBottom: 8,
  },
  cardHeader: {
    marginBottom: 8,
  },
  amenitiesList: {
    gap: 4,
  },
  amenityItem: {
    fontSize: 14,
  },
  availabilityText: {
    fontSize: 14,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
  },
});
