import { Button, FlatList, SafeAreaView, Image, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, H4, ListItem, Paragraph, XStack, YStack } from 'tamagui'
import type { CardProps } from 'tamagui'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Scary Cottage',
    image: 'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/published/203-0145-2.jpg?1744545750',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ice Cottage',
    image: 'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/editor/7-outside-view.jpg?1665689086',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sporty Cottage',
    image: 'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/editor/6.jpg?1625247281',
  }
];


// const Item = ({title}: ItemProps) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

function CottageItem({ item }: any) {
  // return <ListItem hoverTheme >{item.title}</ListItem>
  const borderWidth = 1
  return (
    <Card
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      align="center"
      // elevate
      size="$4"
      bordered
      borderWidth={borderWidth}
      borderRadius="$4"
      // animation="bouncy"
      width={300 + (borderWidth * 2)}
      height={400}
      scale={1}
      // hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
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
          <Paragraph theme="alt2">Now available</Paragraph>
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
        data={DATA}
        renderItem={(item: any) => CottageItem(item)}
        keyExtractor={(item: { id: any; }) => item.id}
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
