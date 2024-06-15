import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function ProblemScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image source={require('../../assets/images/anzen_logo.png')} style={styles.logo} />
          <Text style={styles.title}>Problem?</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Willkommen auf der Problemseite von Anzen. Hier finden Sie Lösungen für häufige Probleme sowie Informationen zu unserer Datenschutzrichtlinie und unseren Allgemeinen Geschäftsbedingungen. Bitte lesen Sie die folgenden Informationen sorgfältig durch.
          </Text>
          <Text style={styles.subTitle}>Datenschutzrichtlinie</Text>
          <Text style={styles.text}>
            Bei Anzen schätzen wir Ihre Privatsphäre. Unsere Datenschutzrichtlinie beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen. Wir stellen sicher, dass Ihre Daten sicher und in Übereinstimmung mit geltenden Gesetzen und Vorschriften behandelt werden.
          </Text>
          <Text style={styles.subTitle}>Allgemeine Geschäftsbedingungen</Text>
          <Text style={styles.text}>
            Durch die Nutzung von Anzen stimmen Sie unseren Allgemeinen Geschäftsbedingungen zu. Diese Bedingungen regeln Ihre Rechte und Pflichten bei der Nutzung unserer Dienste. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu aktualisieren. Es liegt in Ihrer Verantwortung, sich über etwaige Änderungen zu informieren.
          </Text>
          <Text style={styles.subTitle}>Häufige Probleme</Text>
          <Text style={styles.text}>
            Wenn Sie bei der Nutzung von Anzen auf Probleme stoßen, konsultieren Sie bitte den Abschnitt „Häufige Probleme“ unten. Sollte Ihr Problem nicht aufgeführt sein, wenden Sie sich bitte an unser Support-Team, um weitere Hilfe zu erhalten.
          </Text>
          <Text style={styles.text}>
            1. Anmeldeprobleme: Stellen Sie sicher, dass Ihr Benutzername und Ihr Passwort korrekt sind. Wenn Sie Ihr Passwort vergessen haben, verwenden Sie die Option zur Passwortwiederherstellung.
          </Text>
          <Text style={styles.text}>
            2. Kontosperrung: Wenn Ihr Konto gesperrt ist, warten Sie bitte 30 Minuten, bevor Sie es erneut versuchen. Wenn das Problem weiterhin besteht, wenden Sie sich an den Support.
          </Text>
          <Text style={styles.text}>
            3. Zahlungsprobleme: Überprüfen Sie, ob Ihre Zahlungsinformationen korrekt sind und ob Sie über ausreichende Mittel verfügen. Wenden Sie sich an den Support, wenn das Problem weiterhin besteht.
          </Text>
        </View>
        <View style={styles.linkContainer}>
          <Link href={'../home'} style={styles.linkText}>Zurück zur Startseite</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010137'
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 140,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 20,
    marginHorizontal: '10%',
  },
  text: {
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
  subTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20
  },
  linkText: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontSize: 18,
  }
});
