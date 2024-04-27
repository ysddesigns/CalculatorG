import { FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import abouListt from "@/components/about.json";
import { View, Text } from "@/components/Themed";
import { ExternalLink } from "@/components/ExternalLink";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/smart.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <FlatList
          data={abouListt}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.label}>{item.name}</Text>
              <Text style={styles.value}>{item.about}</Text>
              <Text style={styles.label}>{item.date}</Text>
              <Text style={styles.value}>{item.description}</Text>
              <View style={styles.socialContainer}>
                <ExternalLink href="https://www.facebook.com/yusuffsmartt">
                  <Image
                    source={require("@/assets/images/facebook.png")}
                    style={styles.socialIcon}
                  />
                </ExternalLink>

                <ExternalLink href="https://wa.me/message/46WNV2KL7OYFL1">
                  <Image
                    source={require("@/assets/images/whatsapp.png")}
                    style={styles.socialIcon}
                  />
                </ExternalLink>

                <ExternalLink href="https://www.twitter.com/yusuf_smart1">
                  <Image
                    source={require("@/assets/images/twitter.png")}
                    style={styles.socialIcon}
                  />
                </ExternalLink>

                <ExternalLink href="https://www.instagram.com/yusuff_smaert">
                  <Image
                    source={require("@/assets/images/instagram.png")}
                    style={styles.socialIcon}
                  />
                </ExternalLink>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={{ textAlign: "justify" }}>
          click on any social media icon to visit my profile
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoContainer: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  socialIcon: {
    width: 75,
    height: 75,
    margin: 10,
    resizeMode: "contain",
  },
});
