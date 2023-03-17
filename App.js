import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import  AppLoading  from 'expo-app-loading';
import { useFonts, Inter_500Medium, Inter_800ExtraBold, Inter_900Black,} from '@expo-google-fonts/inter';

export default function App() {
  
  let [fontsLoaded] =useFonts({
    Inter_500Medium,
    Inter_800ExtraBold,
    Inter_900Black
  });
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Receitas superabundantemente boas.</Text>
    <FlatList
    data={arrayReceita}
    renderItem={({item})=>
    <View style={styles.container}>
    <Image style={styles.img}source={item.foto}/>
    <Text>
    <Text style={styles.subTitle}>Receita:</Text> {item.Receita} {'\n\n'}
    <Text style={styles.subTitle}>Ingredientes: </Text>{item.Ingredientes} {'\n\n'}  
    <Text style={styles.subTitle}>Modo de preparo: </Text>{item.ModoF} {'\n'}
    <Text style={styles.aviso}>Faça com cuidado!</Text>
    </Text>
    </View>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF7F50',
    padding: 8,
  },
  title:{
    fontSize:30,
    color: '#000000',
    fontFamily: 'Inter_900Black',
    textAlign: 'center'
  },
  img:{
    borderRadius: 10,
    width: 375,
    height: 250,
    textAlign: 'center'
  },
  subTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_500Medium'
  },
  aviso:{
    fontFamily: 'Inter_800ExtraBold',
    textAlign: 'center'
  }
  

});

const arrayReceita =[

  {Receita:'Arroz Carreteiro', 
Ingredientes: '\n3 copos de arroz\n500 g de carne seca \n200 g de bacon fatiado \n200 g de calabresa \n1 tomate grande bem maduro \n1 cebola grande \nPimenta calabresa \nSalsa \nSal', 
ModoF:'\nCozinhe a carne seca em panela de pressão, retire, espera esfriar e desfie.\nReserve.\nRetire a pele da calabresa e corte em cubos juntamente com o bacon.\nCorte o tomate em cubos pequenos sem as sementes bem como a cebola.\nReserve.\nRefogue o bacon e a calabresa até ficar bem dourada, acrescentando depois a cebola, tomate, pimenta calabresa e a carne desfiada.\nApós acrescente o arroz, afogue bem, adicione a água corrigindo o sal se necessário e abaixe o fogo aguardando secar.\nQuando pronto, colocar a salsa em cima.', 
foto:require('./assets/arrozcarreteiro.jpg')},

  {Receita:'Bolo de Banana',
   Ingredientes:'\nPara a massa:\n3 ovos\n2 xícaras (chá) de açúcar\n1 xícara (chá) de leite\n1/2 xícara (chá) de óleo\n2 xícaras (chá) de farinha de trigo\n1 colher (sopa) de fermento químico\n7 bananas \nPara a cobertura:\n3/4 xícara (chá) de açúcar\n1/2 xícara (chá) de água quente', 
   ModoF:'\n(Cobertura)\nEm uma panela, adicione o açúcar e misture até derreter.\nDespeje a água quente e mexa até dissolver o açúcar.\nDeixe engrossar até chegar ao ponto de calda e reserve.\n(Massa)\nBata no liquidificador os ovos, o açúcar, o óleo e o leite.\nAcrescente a farinha de trigo aos poucos e continue batendo até obter uma massa lisa e homogênea.\nAdicione por último o fermento e bata na velocidade mínima do liquidificador.\nUnte uma forma média com margarina e farinha.Despeje o caramelo e as bananas cortadas no comprimento.\nLeve para assar em forno médio 180ºC, pré-aquecido por aproximadamente 30 minutos.', 
   foto:require('./assets/bolobanana.jpg')},

  {Receita:'Brigadeiro', 
  Ingredientes:'\n1 caixa de leite condensado\n1 colher (sopa) de margarina sem sal\n7 colheres (sopa) de achocolatado\nChocolate granulado', 
  ModoF:'\nEm uma panela funda, acrescente o leite condensado, a margarina e o achocolatado (ou 4 colheres de sopa de chocolate em pó).\nCozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.\nDeixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.', 
  foto:require('./assets/brigadeir.jpg')},

  {Receita:'Torta de Atum', 
  Ingredientes:'\n2 copo de leite\n1 copo de óleo\n2 xícaras de farinha\n1 colher de sobremesa de sal\n2 colher de sobremesa de fermento em pó\n3 ovos\n1 tomate médio picado\n1 lata de atum ralado\n1 porção de ervilha a seu gosto\n4 azeitonas picadas', 
  ModoF:'\n(Massa)Bata todos os ingredientes no liquidificador. Unte uma assadeira e depois coloque uma camada de massa e outra de recheio e em seguida outra de massa.\n(Recheio)Misture todos os ingredientes em um prato tempere a seu gosto e esta pronto o recheio.', 
  foto:require('./assets/tortadatum.jpg')},


  {Receita:'Strogonoff', 
  Ingredientes:'\n3 peitos de frango cortados em cubos\n1 dente de alho picadosa\nl e pimenta a gosto\n1 cebola picada\n2 colheres (sopa) de maionese\n1 colher de manteiga\n1/2 copo de ketchup\n1/3 copo de mostarda\n1 copo de cogumelos\n1 copo de creme de leite\nbatata palha a gosto', 
  ModoF:'\nEm uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.\nEm uma frigideira grande, derreta a manteiga e doure a cebola.\nJunte o frango temperado até que esteja dourado.\nAdicione os cogumelos, o ketchup e a mostarda.\nIncorpore o creme de leite e retire do fogo antes de ferver.\nSirva com arroz branco e batata palha.', 
  foto:require('./assets/strogonoff.jpg')}
]
