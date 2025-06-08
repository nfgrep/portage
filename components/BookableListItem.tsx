import { Image } from 'react-native';
import { Card, H4, Paragraph, YStack } from 'tamagui';
import { router } from 'expo-router';
import { Bookable } from '@/data/Interfaces/bookableItemInterface';

export function BookableListItem({ item }: { item: Bookable }) {
  const borderWidth = 1;
  const handlePress = () => {
    router.push(`/${item.bookableType}/${item.id}`);
  };

  return (
    <Card
      alignItems="center"
      justifyContent="center"
      size="$4"
      bordered
      borderWidth={borderWidth}
      borderRadius="$4"
      width={300 + borderWidth * 2}
      height={400}
      scale={1}
      pressStyle={{ scale: 0.875 }}
      onPress={handlePress}
    >
      <Image
        // resizeMode="contain"
        source={{
          width: 300,
          height: 300,
          uri: item.image,
        }}
        style={{
          alignSelf: 'center', // Centers horizontally

          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      />

      <Card.Footer padded>
        <YStack flex={1}>
          <H4>{item.title}</H4>
          <Paragraph>Now available</Paragraph>
        </YStack>
      </Card.Footer>

      {/* <Card.Background>
      </Card.Background> */}
    </Card>
  );
}
