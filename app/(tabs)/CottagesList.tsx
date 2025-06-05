import { Button, FlatList, SafeAreaView, Image, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, H4, ListItem, Paragraph, XStack, YStack } from 'tamagui'
import type { CardProps } from 'tamagui'
import { router } from 'expo-router';
import { cottagesData, type Cottage } from '@/data/cottages';


// const Item = ({title}: ItemProps) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

function CottageItem({ item }: { item: Cottage }) {
  // return <ListItem hoverTheme >{item.title}</ListItem>
  const borderWidth = 1
  
  const handlePress = () => {
    router.push(`/cottage/${item.id}`);
  };
  
  return (
    <Card
      alignItems="center"
      justifyContent="center"
      size="$4"
      bordered
      borderWidth={borderWidth}
      borderRadius="$4"
      width={300 + (borderWidth * 2)}
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

          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          
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
  )
}

export default function Demo() {
  return (
    <SafeAreaProvider>

      <FlatList
        data={cottagesData}
        renderItem={(item: any) => CottageItem(item)}
        keyExtractor={(item: Cottage) => item.id}
        contentContainerStyle={{
          rowGap: 20,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

    </SafeAreaProvider>
  )
}
