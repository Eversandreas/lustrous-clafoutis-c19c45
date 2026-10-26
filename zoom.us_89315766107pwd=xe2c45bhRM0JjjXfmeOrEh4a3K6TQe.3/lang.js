/* ============================================================
   lang.js — shared language switcher, full-coverage version
   ============================================================ */
(function () {
  'use strict';

  var TRANSLATIONS = {
    'en-US': {
      support:'Support', joinMeeting:'Join meeting', joinApp:'Join from Zoom Workplace app', joinBrowser:'Join from browser',
      dontHaveApp:'Don’t have the Zoom Workplace app installed?', downloadNow:'Download Now',
      agreeText:'By joining a meeting, you agree to our', terms:'Terms of Service', privacy:'Privacy Statement', and:'and',
      popoverTitle:'Did not open Zoom Workplace app?', popoverBodyA:'Please ', popoverBodyB:' and install the app and click Join from Zoom Workplace app again.', popoverLink:'download',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'All rights reserved.',
      trustCenter:'Trust Center', acceptableUse:'Acceptable Use Guidelines', legalCompliance:'Legal & Compliance',
      doNotSell:'Do Not Sell My Personal Information', cookiePrefs:'Cookie Preferences',
      ozdTitle:'Open Zoom Meetings?', ozdUrl:'https://us05web.zoom.us wants to open this application.',
      ozdCheck:'Always allow us05web.zoom.us to open links of this type in the associated app',
      ozdOpen:'Open Zoom Meetings', ozdCancel:'Cancel',
      updTitle:'Update Required', updBody:'Your app version needs to be 7.1.8 (46825) or higher to join this meeting. Please update to continue.',
      updBtn:'Update', updCancel:'Cancel',
      instLine1:'Once you install the Zoom Workplace app,', instLine2:'click "Join from Zoom Workplace app" below',
      rupdTitle:'Unable to establish secure connection to Zoom', rupdBody:'Install the Zoom Workplace Update 7.1.8. Please update to continue.',
      spinText:'Joining Meeting...',
      permTitle:'Do you want people to see you in the meeting?',
      permSubtitle:'You can still turn off your microphone and camera anytime in the meeting',
      permPrimary:'Use microphone and camera', permSecondary:'Continue without microphone and camera',
      back:'Back',
      pmiTitle:'Enter Meeting Info', pmiName:'Your Name', pmiRemember:'Remember my name for future meetings',
      pmiJoin:'Join', pmiAgreePre:'By clicking "Join", you agree to our',
      recaptchaPre:'Zoom is protected by reCAPTCHA and their', recaptchaPolicy:'Privacy Policy', recaptchaPost:'apply.',
      pfPrivacy:'Privacy & Legal Policies', pfSendReport:'Send Report',
      tbMute:'Mute', tbUnmute:'Unmute', tbVideo:'Video', tbStart:'Start Video', tbStopVideo:'Stop Video',
      tbParticipants:'Participants', tbChat:'Chat', tbReact:'React', tbShare:'Share', tbMore:'More', tbLeave:'Leave',
      ilInvite:'Invite Link', ilMeetingId:'Meeting ID', ilPasscode:'Passcode',
      ilNumeric:'Numeric Password', ilTelephone:'Telephone/Room Systems', ilParticipant:'Participant ID',
      guest:'Guest',
      aiTitle:'A new home for Zoom AI',
      aiBody:'All your AI features are in the top right, with clearer indicators when transcription is on.',
      aiGotIt:'Got it'
    },
    'es-ES': {
      support:'Soporte', joinMeeting:'Unirse a la reunión', joinApp:'Unirse desde la aplicación Zoom Workplace', joinBrowser:'Unirse desde el navegador',
      dontHaveApp:'¿No tienes instalada la aplicación Zoom Workplace?', downloadNow:'Descargar ahora',
      agreeText:'Al unirte a una reunión, aceptas nuestros', terms:'Términos del servicio', privacy:'Declaración de privacidad', and:'y',
      popoverTitle:'¿No se abrió la aplicación Zoom Workplace?', popoverBodyA:'Por favor, ', popoverBodyB:' e instala la aplicación, luego haz clic en Unirse desde la aplicación Zoom Workplace otra vez.', popoverLink:'descarga',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Todos los derechos reservados.',
      trustCenter:'Centro de confianza', acceptableUse:'Guías de uso aceptable', legalCompliance:'Legal y cumplimiento',
      doNotSell:'No vender mi información personal', cookiePrefs:'Preferencias de cookies',
      ozdTitle:'¿Abrir Zoom Meetings?', ozdUrl:'https://us05web.zoom.us quiere abrir esta aplicación.',
      ozdCheck:'Permitir siempre que us05web.zoom.us abra enlaces de este tipo en la aplicación asociada',
      ozdOpen:'Abrir Zoom Meetings', ozdCancel:'Cancelar',
      updTitle:'Actualización necesaria', updBody:'Tu versión debe ser 7.1.8 (46825) o superior para unirte. Actualiza para continuar.',
      updBtn:'Actualizar', updCancel:'Cancelar',
      instLine1:'Una vez que instales la aplicación Zoom Workplace,', instLine2:'haz clic en "Unirse desde la aplicación Zoom Workplace" a continuación',
      rupdTitle:'No se puede establecer una conexión segura con Zoom', rupdBody:'Instala la actualización de Zoom Workplace 7.1.8. Actualiza para continuar.',
      spinText:'Uniéndose a la reunión...',
      permTitle:'¿Quieres que la gente te vea en la reunión?',
      permSubtitle:'Puedes desactivar tu micrófono y cámara en cualquier momento durante la reunión',
      permPrimary:'Usar micrófono y cámara', permSecondary:'Continuar sin micrófono ni cámara',
      back:'Atrás',
      pmiTitle:'Introduce la información de la reunión', pmiName:'Tu nombre', pmiRemember:'Recordar mi nombre para futuras reuniones',
      pmiJoin:'Unirse', pmiAgreePre:'Al hacer clic en "Unirse", aceptas nuestros',
      recaptchaPre:'Zoom está protegido por reCAPTCHA y su', recaptchaPolicy:'Política de privacidad', recaptchaPost:'aplican.',
      pfPrivacy:'Privacidad y políticas legales', pfSendReport:'Enviar informe',
      tbMute:'Silenciar', tbUnmute:'Activar', tbVideo:'Vídeo', tbStart:'Iniciar vídeo', tbStopVideo:'Detener vídeo',
      tbParticipants:'Participantes', tbChat:'Chat', tbReact:'Reaccionar', tbShare:'Compartir', tbMore:'Más', tbLeave:'Salir',
      ilInvite:'Enlace de invitación', ilMeetingId:'ID de reunión', ilPasscode:'Contraseña',
      ilNumeric:'Contraseña numérica', ilTelephone:'Sistemas telefónicos/salas', ilParticipant:'ID de participante',
      guest:'Invitado',
      aiTitle:'Un nuevo hogar para Zoom AI',
      aiBody:'Todas tus funciones de IA están en la esquina superior derecha, con indicadores más claros cuando la transcripción está activada.',
      aiGotIt:'Entendido'
    },
    'de-DE': {
      support:'Support', joinMeeting:'Meeting beitreten', joinApp:'Über die Zoom Workplace App beitreten', joinBrowser:'Im Browser beitreten',
      dontHaveApp:'Die Zoom Workplace App ist nicht installiert?', downloadNow:'Jetzt herunterladen',
      agreeText:'Durch den Beitritt zu einem Meeting stimmen Sie unseren', terms:'Nutzungsbedingungen', privacy:'Datenschutzerklärung', and:'und',
      popoverTitle:'Zoom Workplace App wurde nicht geöffnet?', popoverBodyA:'Bitte ', popoverBodyB:' und installieren Sie die App, dann klicken Sie erneut auf „Über die Zoom Workplace App beitreten“.', popoverLink:'herunterladen',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Alle Rechte vorbehalten.',
      trustCenter:'Trust Center', acceptableUse:'Richtlinien zur akzeptablen Nutzung', legalCompliance:'Recht & Compliance',
      doNotSell:'Meine persönlichen Daten nicht verkaufen', cookiePrefs:'Cookie-Einstellungen',
      ozdTitle:'Zoom Meetings öffnen?', ozdUrl:'https://us05web.zoom.us möchte diese Anwendung öffnen.',
      ozdCheck:'Immer zulassen, dass us05web.zoom.us Links dieses Typs in der zugehörigen App öffnet',
      ozdOpen:'Zoom Meetings öffnen', ozdCancel:'Abbrechen',
      updTitle:'Update erforderlich', updBody:'Ihre App-Version muss 7.1.8 (46825) oder höher sein. Bitte aktualisieren Sie.',
      updBtn:'Aktualisieren', updCancel:'Abbrechen',
      instLine1:'Sobald Sie die Zoom Workplace App installiert haben,', instLine2:'klicken Sie unten auf „Über die Zoom Workplace App beitreten“',
      rupdTitle:'Keine sichere Verbindung zu Zoom möglich', rupdBody:'Installieren Sie das Zoom Workplace Update 7.1.8. Bitte aktualisieren Sie.',
      spinText:'Meeting wird beigetreten...',
      permTitle:'Sollen andere Sie im Meeting sehen?',
      permSubtitle:'Sie können Mikrofon und Kamera jederzeit im Meeting ausschalten',
      permPrimary:'Mikrofon und Kamera verwenden', permSecondary:'Ohne Mikrofon und Kamera fortfahren',
      back:'Zurück',
      pmiTitle:'Meeting-Info eingeben', pmiName:'Ihr Name', pmiRemember:'Meinen Namen für zukünftige Meetings merken',
      pmiJoin:'Beitreten', pmiAgreePre:'Durch Klicken auf „Beitreten“ stimmen Sie unseren',
      recaptchaPre:'Zoom ist durch reCAPTCHA geschützt und deren', recaptchaPolicy:'Datenschutzerklärung', recaptchaPost:'gelten.',
      pfPrivacy:'Datenschutz & rechtliche Hinweise', pfSendReport:'Bericht senden',
      tbMute:'Stumm', tbUnmute:'Ton an', tbVideo:'Video', tbStart:'Video starten', tbStopVideo:'Video stoppen',
      tbParticipants:'Teilnehmer', tbChat:'Chat', tbReact:'Reagieren', tbShare:'Teilen', tbMore:'Mehr', tbLeave:'Verlassen',
      ilInvite:'Einladungslink', ilMeetingId:'Meeting-ID', ilPasscode:'Passwort',
      ilNumeric:'Numerisches Passwort', ilTelephone:'Telefon-/Raumsysteme', ilParticipant:'Teilnehmer-ID',
      guest:'Gast',
      aiTitle:'Ein neues Zuhause für Zoom AI',
      aiBody:'Alle Ihre KI-Funktionen befinden sich oben rechts, mit klareren Anzeigen, wenn die Transkription aktiviert ist.',
      aiGotIt:'Verstanden'
    },
    'fr-FR': {
      support:'Support', joinMeeting:'Rejoindre la réunion', joinApp:'Rejoindre depuis l’application Zoom Workplace', joinBrowser:'Rejoindre depuis le navigateur',
      dontHaveApp:'Vous n’avez pas l’application Zoom Workplace installée ?', downloadNow:'Télécharger maintenant',
      agreeText:'En rejoignant une réunion, vous acceptez nos', terms:'Conditions d’utilisation', privacy:'Déclaration de confidentialité', and:'et',
      popoverTitle:'L’application Zoom Workplace ne s’est pas ouverte ?', popoverBodyA:'Veuillez ', popoverBodyB:' et installer l’application, puis cliquer à nouveau sur Rejoindre depuis l’application Zoom Workplace.', popoverLink:'télécharger',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Tous droits réservés.',
      trustCenter:'Centre de confiance', acceptableUse:'Règles d’utilisation acceptable', legalCompliance:'Légal et conformité',
      doNotSell:'Ne pas vendre mes informations personnelles', cookiePrefs:'Préférences de cookies',
      ozdTitle:'Ouvrir Zoom Meetings ?', ozdUrl:'https://us05web.zoom.us souhaite ouvrir cette application.',
      ozdCheck:'Toujours autoriser us05web.zoom.us à ouvrir les liens de ce type dans l’application associée',
      ozdOpen:'Ouvrir Zoom Meetings', ozdCancel:'Annuler',
      updTitle:'Mise à jour requise', updBody:'Votre version doit être 7.1.8 (46825) ou supérieure. Veuillez mettre à jour.',
      updBtn:'Mettre à jour', updCancel:'Annuler',
      instLine1:'Une fois l’application Zoom Workplace installée,', instLine2:'cliquez sur « Rejoindre depuis l’application Zoom Workplace » ci-dessous',
      rupdTitle:'Impossible d’établir une connexion sécurisée à Zoom', rupdBody:'Installez la mise à jour Zoom Workplace 7.1.8. Veuillez mettre à jour.',
      spinText:'Connexion à la réunion...',
      permTitle:'Voulez-vous que les autres vous voient dans la réunion ?',
      permSubtitle:'Vous pouvez désactiver votre micro et votre caméra à tout moment pendant la réunion',
      permPrimary:'Utiliser le micro et la caméra', permSecondary:'Continuer sans micro ni caméra',
      back:'Retour',
      pmiTitle:'Saisir les informations de réunion', pmiName:'Votre nom', pmiRemember:'Se souvenir de mon nom pour les prochaines réunions',
      pmiJoin:'Rejoindre', pmiAgreePre:'En cliquant sur « Rejoindre », vous acceptez nos',
      recaptchaPre:'Zoom est protégé par reCAPTCHA et leur', recaptchaPolicy:'Politique de confidentialité', recaptchaPost:'s’appliquent.',
      pfPrivacy:'Confidentialité et politiques légales', pfSendReport:'Envoyer un rapport',
      tbMute:'Muet', tbUnmute:'Réactiver', tbVideo:'Vidéo', tbStart:'Démarrer la vidéo', tbStopVideo:'Arrêter la vidéo',
      tbParticipants:'Participants', tbChat:'Chat', tbReact:'Réagir', tbShare:'Partager', tbMore:'Plus', tbLeave:'Quitter',
      ilInvite:'Lien d’invitation', ilMeetingId:'ID de réunion', ilPasscode:'Code d’accès',
      ilNumeric:'Mot de passe numérique', ilTelephone:'Systèmes téléphoniques/salles', ilParticipant:'ID de participant',
      guest:'Invité',
      aiTitle:'Un nouveau foyer pour Zoom AI',
      aiBody:'Toutes vos fonctionnalités IA sont en haut à droite, avec des indicateurs plus clairs lorsque la transcription est activée.',
      aiGotIt:'Compris'
    },
    'pt-PT': {
      support:'Suporte', joinMeeting:'Entrar na reunião', joinApp:'Entrar pela aplicação Zoom Workplace', joinBrowser:'Entrar pelo navegador',
      dontHaveApp:'Não tem a aplicação Zoom Workplace instalada?', downloadNow:'Descarregar agora',
      agreeText:'Ao entrar numa reunião, concorda com os nossos', terms:'Termos de Serviço', privacy:'Declaração de Privacidade', and:'e',
      popoverTitle:'A aplicação Zoom Workplace não abriu?', popoverBodyA:'Por favor, ', popoverBodyB:' e instale a aplicação, depois clique em Entrar pela aplicação Zoom Workplace novamente.', popoverLink:'descarregue',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Todos os direitos reservados.',
      trustCenter:'Centro de Confiança', acceptableUse:'Diretrizes de Uso Aceitável', legalCompliance:'Legal e Conformidade',
      doNotSell:'Não vender as minhas informações pessoais', cookiePrefs:'Preferências de cookies',
      ozdTitle:'Abrir Zoom Meetings?', ozdUrl:'https://us05web.zoom.us quer abrir esta aplicação.',
      ozdCheck:'Permitir sempre que us05web.zoom.us abra ligações deste tipo na aplicação associada',
      ozdOpen:'Abrir Zoom Meetings', ozdCancel:'Cancelar',
      updTitle:'Atualização necessária', updBody:'A sua versão deve ser 7.1.8 (46825) ou superior. Atualize para continuar.',
      updBtn:'Atualizar', updCancel:'Cancelar',
      instLine1:'Depois de instalar a aplicação Zoom Workplace,', instLine2:'clique em "Entrar pela aplicação Zoom Workplace" abaixo',
      rupdTitle:'Não foi possível estabelecer ligação segura à Zoom', rupdBody:'Instale a atualização Zoom Workplace 7.1.8. Atualize para continuar.',
      spinText:'A entrar na reunião...',
      permTitle:'Quer que as pessoas o vejam na reunião?',
      permSubtitle:'Pode desligar o microfone e a câmara a qualquer momento durante a reunião',
      permPrimary:'Utilizar microfone e câmara', permSecondary:'Continuar sem microfone nem câmara',
      back:'Voltar',
      pmiTitle:'Introduzir informações da reunião', pmiName:'O seu nome', pmiRemember:'Memorizar o meu nome para reuniões futuras',
      pmiJoin:'Entrar', pmiAgreePre:'Ao clicar em "Entrar", concorda com os nossos',
      recaptchaPre:'O Zoom é protegido por reCAPTCHA e a sua', recaptchaPolicy:'Política de Privacidade', recaptchaPost:'aplicam-se.',
      pfPrivacy:'Privacidade e políticas legais', pfSendReport:'Enviar relatório',
      tbMute:'Silenciar', tbUnmute:'Ativar', tbVideo:'Vídeo', tbStart:'Iniciar vídeo', tbStopVideo:'Parar vídeo',
      tbParticipants:'Participantes', tbChat:'Chat', tbReact:'Reagir', tbShare:'Partilhar', tbMore:'Mais', tbLeave:'Sair',
      ilInvite:'Ligação de convite', ilMeetingId:'ID da reunião', ilPasscode:'Palavra-passe',
      ilNumeric:'Palavra-passe numérica', ilTelephone:'Sistemas telefónicos/salas', ilParticipant:'ID de participante',
      guest:'Convidado',
      aiTitle:'Uma nova casa para o Zoom AI',
      aiBody:'Todas as suas funcionalidades de IA estão no canto superior direito, com indicadores mais claros quando a transcrição está ativada.',
      aiGotIt:'Entendido'
    },
    'it-IT': {
      support:'Supporto', joinMeeting:'Partecipa alla riunione', joinApp:'Partecipa dall’app Zoom Workplace', joinBrowser:'Partecipa dal browser',
      dontHaveApp:'Non hai installato l’app Zoom Workplace?', downloadNow:'Scarica ora',
      agreeText:'Partecipando a una riunione, accetti i nostri', terms:'Termini di servizio', privacy:'Informativa sulla privacy', and:'e',
      popoverTitle:'L’app Zoom Workplace non si è aperta?', popoverBodyA:'Per favore, ', popoverBodyB:' e installa l’app, poi fai clic su Partecipa dall’app Zoom Workplace di nuovo.', popoverLink:'scarica',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Tutti i diritti riservati.',
      trustCenter:'Trust Center', acceptableUse:'Linee guida sull’uso accettabile', legalCompliance:'Legale e conformità',
      doNotSell:'Non vendere le mie informazioni personali', cookiePrefs:'Preferenze sui cookie',
      ozdTitle:'Aprire Zoom Meetings?', ozdUrl:'https://us05web.zoom.us vuole aprire questa applicazione.',
      ozdCheck:'Consenti sempre a us05web.zoom.us di aprire link di questo tipo nell’app associata',
      ozdOpen:'Apri Zoom Meetings', ozdCancel:'Annulla',
      updTitle:'Aggiornamento richiesto', updBody:'La tua versione deve essere 7.1.8 (46825) o superiore. Aggiorna per continuare.',
      updBtn:'Aggiorna', updCancel:'Annulla',
      instLine1:'Dopo aver installato l’app Zoom Workplace,', instLine2:'fai clic su "Partecipa dall’app Zoom Workplace" qui sotto',
      rupdTitle:'Impossibile stabilire una connessione sicura a Zoom', rupdBody:'Installa l’aggiornamento Zoom Workplace 7.1.8. Aggiorna per continuare.',
      spinText:'Partecipazione alla riunione...',
      permTitle:'Vuoi che le persone ti vedano nella riunione?',
      permSubtitle:'Puoi disattivare microfono e fotocamera in qualsiasi momento durante la riunione',
      permPrimary:'Usa microfono e fotocamera', permSecondary:'Continua senza microfono né fotocamera',
      back:'Indietro',
      pmiTitle:'Inserisci info riunione', pmiName:'Il tuo nome', pmiRemember:'Ricorda il mio nome per riunioni future',
      pmiJoin:'Partecipa', pmiAgreePre:'Facendo clic su "Partecipa", accetti i nostri',
      recaptchaPre:'Zoom è protetto da reCAPTCHA e la loro', recaptchaPolicy:'Informativa sulla privacy', recaptchaPost:'si applicano.',
      pfPrivacy:'Privacy e informative legali', pfSendReport:'Invia segnalazione',
      tbMute:'Muto', tbUnmute:'Riattiva', tbVideo:'Video', tbStart:'Avvia video', tbStopVideo:'Interrompi video',
      tbParticipants:'Partecipanti', tbChat:'Chat', tbReact:'Reagisci', tbShare:'Condividi', tbMore:'Altro', tbLeave:'Esci',
      ilInvite:'Link d’invito', ilMeetingId:'ID riunione', ilPasscode:'Password',
      ilNumeric:'Password numerica', ilTelephone:'Sistemi telefonici/sale', ilParticipant:'ID partecipante',
      guest:'Ospite',
      aiTitle:'Una nuova casa per Zoom AI',
      aiBody:'Tutte le tue funzionalità IA sono in alto a destra, con indicatori più chiari quando la trascrizione è attiva.',
      aiGotIt:'Ho capito'
    },
    'nl-NL': {
      support:'Ondersteuning', joinMeeting:'Deelnemen aan vergadering', joinApp:'Deelnemen via Zoom Workplace-app', joinBrowser:'Deelnemen via browser',
      dontHaveApp:'Heb je de Zoom Workplace-app niet geïnstalleerd?', downloadNow:'Nu downloaden',
      agreeText:'Door deel te nemen aan een vergadering ga je akkoord met onze', terms:'Servicevoorwaarden', privacy:'Privacyverklaring', and:'en',
      popoverTitle:'Zoom Workplace-app niet geopend?', popoverBodyA:'Gelieve ', popoverBodyB:' en installeer de app, klik daarna opnieuw op Deelnemen via Zoom Workplace-app.', popoverLink:'te downloaden',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Alle rechten voorbehouden.',
      trustCenter:'Trust Center', acceptableUse:'Richtlijnen voor acceptabel gebruik', legalCompliance:'Juridisch en naleving',
      doNotSell:'Verkoop mijn persoonlijke gegevens niet', cookiePrefs:'Cookievoorkeuren',
      ozdTitle:'Zoom Meetings openen?', ozdUrl:'https://us05web.zoom.us wil deze applicatie openen.',
      ozdCheck:'Altijd toestaan dat us05web.zoom.us dit soort links opent in de bijbehorende app',
      ozdOpen:'Zoom Meetings openen', ozdCancel:'Annuleren',
      updTitle:'Update vereist', updBody:'Je versie moet 7.1.8 (46825) of hoger zijn. Werk bij om door te gaan.',
      updBtn:'Bijwerken', updCancel:'Annuleren',
      instLine1:'Zodra je de Zoom Workplace-app hebt geïnstalleerd,', instLine2:'klik hieronder op "Deelnemen via Zoom Workplace-app"',
      rupdTitle:'Kan geen beveiligde verbinding met Zoom tot stand brengen', rupdBody:'Installeer de Zoom Workplace Update 7.1.8. Werk bij om door te gaan.',
      spinText:'Deelnemen aan vergadering...',
      permTitle:'Wil je dat mensen je zien in de vergadering?',
      permSubtitle:'Je kunt je microfoon en camera op elk moment uitschakelen tijdens de vergadering',
      permPrimary:'Microfoon en camera gebruiken', permSecondary:'Doorgaan zonder microfoon en camera',
      back:'Terug',
      pmiTitle:'Voer vergaderingsinfo in', pmiName:'Je naam', pmiRemember:'Mijn naam onthouden voor toekomstige vergaderingen',
      pmiJoin:'Deelnemen', pmiAgreePre:'Door op "Deelnemen" te klikken, ga je akkoord met onze',
      recaptchaPre:'Zoom is beveiligd door reCAPTCHA en hun', recaptchaPolicy:'Privacybeleid', recaptchaPost:'zijn van toepassing.',
      pfPrivacy:'Privacy en juridisch', pfSendReport:'Rapport verzenden',
      tbMute:'Dempen', tbUnmute:'Dempen opheffen', tbVideo:'Video', tbStart:'Video starten', tbStopVideo:'Video stoppen',
      tbParticipants:'Deelnemers', tbChat:'Chat', tbReact:'Reageren', tbShare:'Delen', tbMore:'Meer', tbLeave:'Verlaten',
      ilInvite:'Uitnodigingslink', ilMeetingId:'Meeting-ID', ilPasscode:'Wachtwoord',
      ilNumeric:'Numeriek wachtwoord', ilTelephone:'Telefoon-/kamerapparatuur', ilParticipant:'Deelnemer-ID',
      guest:'Gast',
      aiTitle:'Een nieuw thuis voor Zoom AI',
      aiBody:'Al je AI-functies staan rechtsboven, met duidelijkere indicatoren wanneer transcriptie is ingeschakeld.',
      aiGotIt:'Begrepen'
    },
    'sv-SE': {
      support:'Support', joinMeeting:'Gå med i mötet', joinApp:'Gå med från Zoom Workplace-appen', joinBrowser:'Gå med från webbläsaren',
      dontHaveApp:'Har du inte Zoom Workplace-appen installerad?', downloadNow:'Ladda ner nu',
      agreeText:'Genom att gå med i ett möte godkänner du våra', terms:'Användarvillkor', privacy:'Integritetspolicy', and:'och',
      popoverTitle:'Öppnades inte Zoom Workplace-appen?', popoverBodyA:'Vänligen ', popoverBodyB:' och installera appen och klicka sedan på Gå med från Zoom Workplace-appen igen.', popoverLink:'ladda ner',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Alla rättigheter förbehållna.',
      trustCenter:'Trust Center', acceptableUse:'Riktlinjer för godtagbar användning', legalCompliance:'Juridik och efterlevnad',
      doNotSell:'Sälj inte min personliga information', cookiePrefs:'Cookie-inställningar',
      ozdTitle:'Öppna Zoom Meetings?', ozdUrl:'https://us05web.zoom.us vill öppna det här programmet.',
      ozdCheck:'Tillåt alltid us05web.zoom.us att öppna länkar av den här typen i tillhörande app',
      ozdOpen:'Öppna Zoom Meetings', ozdCancel:'Avbryt',
      updTitle:'Uppdatering krävs', updBody:'Din version måste vara 7.1.8 (46825) eller högre. Uppdatera för att fortsätta.',
      updBtn:'Uppdatera', updCancel:'Avbryt',
      instLine1:'När du har installerat Zoom Workplace-appen,', instLine2:'klicka på "Gå med från Zoom Workplace-appen" nedan',
      rupdTitle:'Kan inte upprätta säker anslutning till Zoom', rupdBody:'Installera Zoom Workplace Update 7.1.8. Uppdatera för att fortsätta.',
      spinText:'Går med i mötet...',
      permTitle:'Vill du att folk ska se dig i mötet?',
      permSubtitle:'Du kan stänga av mikrofon och kamera när som helst under mötet',
      permPrimary:'Använd mikrofon och kamera', permSecondary:'Fortsätt utan mikrofon och kamera',
      back:'Tillbaka',
      pmiTitle:'Ange mötesinformation', pmiName:'Ditt namn', pmiRemember:'Kom ihåg mitt namn för framtida möten',
      pmiJoin:'Gå med', pmiAgreePre:'Genom att klicka på "Gå med" godkänner du våra',
      recaptchaPre:'Zoom skyddas av reCAPTCHA och deras', recaptchaPolicy:'Integritetspolicy', recaptchaPost:'gäller.',
      pfPrivacy:'Integritet och juridiska policyer', pfSendReport:'Skicka rapport',
      tbMute:'Tysta', tbUnmute:'Slå på', tbVideo:'Video', tbStart:'Starta video', tbStopVideo:'Stoppa video',
      tbParticipants:'Deltagare', tbChat:'Chatt', tbReact:'Reagera', tbShare:'Dela', tbMore:'Mer', tbLeave:'Lämna',
      ilInvite:'Inbjudningslänk', ilMeetingId:'Mötes-ID', ilPasscode:'Lösenord',
      ilNumeric:'Numeriskt lösenord', ilTelephone:'Telefon-/rumssystem', ilParticipant:'Deltagar-ID',
      guest:'Gäst',
      aiTitle:'Ett nytt hem för Zoom AI',
      aiBody:'Alla dina AI-funktioner finns uppe till höger, med tydligare indikatorer när transkription är på.',
      aiGotIt:'Uppfattat'
    },
    'pl-PL': {
      support:'Pomoc', joinMeeting:'Dołącz do spotkania', joinApp:'Dołącz z aplikacji Zoom Workplace', joinBrowser:'Dołącz z przeglądarki',
      dontHaveApp:'Nie masz zainstalowanej aplikacji Zoom Workplace?', downloadNow:'Pobierz teraz',
      agreeText:'Dołączając do spotkania, akceptujesz nasze', terms:'Warunki korzystania z usługi', privacy:'Oświadczenie o ochronie prywatności', and:'i',
      popoverTitle:'Aplikacja Zoom Workplace nie została otwarta?', popoverBodyA:'Proszę ', popoverBodyB:' i zainstaluj aplikację, a następnie ponownie kliknij Dołącz z aplikacji Zoom Workplace.', popoverLink:'pobierz',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Wszelkie prawa zastrzeżone.',
      trustCenter:'Centrum zaufania', acceptableUse:'Wytyczne dotyczące dopuszczalnego użytkowania', legalCompliance:'Zgodność prawna',
      doNotSell:'Nie sprzedawaj moich danych osobowych', cookiePrefs:'Preferencje plików cookie',
      ozdTitle:'Otworzyć Zoom Meetings?', ozdUrl:'https://us05web.zoom.us chce otworzyć tę aplikację.',
      ozdCheck:'Zawsze zezwalaj us05web.zoom.us na otwieranie linków tego typu w powiązanej aplikacji',
      ozdOpen:'Otwórz Zoom Meetings', ozdCancel:'Anuluj',
      updTitle:'Wymagana aktualizacja', updBody:'Twoja wersja musi być 7.1.8 (46825) lub nowsza. Zaktualizuj, aby kontynuować.',
      updBtn:'Zaktualizuj', updCancel:'Anuluj',
      instLine1:'Po zainstalowaniu aplikacji Zoom Workplace,', instLine2:'kliknij poniżej „Dołącz z aplikacji Zoom Workplace”',
      rupdTitle:'Nie można ustanowić bezpiecznego połączenia z Zoom', rupdBody:'Zainstaluj aktualizację Zoom Workplace 7.1.8. Zaktualizuj, aby kontynuować.',
      spinText:'Dołączanie do spotkania...',
      permTitle:'Czy chcesz, aby ludzie Cię widzieli na spotkaniu?',
      permSubtitle:'Możesz wyłączyć mikrofon i kamerę w dowolnym momencie podczas spotkania',
      permPrimary:'Użyj mikrofonu i kamery', permSecondary:'Kontynuuj bez mikrofonu i kamery',
      back:'Wstecz',
      pmiTitle:'Wprowadź informacje o spotkaniu', pmiName:'Twoje imię', pmiRemember:'Zapamiętaj moje imię na przyszłe spotkania',
      pmiJoin:'Dołącz', pmiAgreePre:'Klikając „Dołącz”, akceptujesz nasze',
      recaptchaPre:'Zoom jest chroniony przez reCAPTCHA, a ich', recaptchaPolicy:'Polityka prywatności', recaptchaPost:'obowiązują.',
      pfPrivacy:'Prywatność i polityki prawne', pfSendReport:'Wyślij raport',
      tbMute:'Wycisz', tbUnmute:'Wyłącz wyciszenie', tbVideo:'Wideo', tbStart:'Włącz wideo', tbStopVideo:'Zatrzymaj wideo',
      tbParticipants:'Uczestnicy', tbChat:'Czat', tbReact:'Reaguj', tbShare:'Udostępnij', tbMore:'Więcej', tbLeave:'Opuść',
      ilInvite:'Link zaproszenia', ilMeetingId:'ID spotkania', ilPasscode:'Hasło',
      ilNumeric:'Hasło numeryczne', ilTelephone:'Systemy telefoniczne/sale', ilParticipant:'ID uczestnika',
      guest:'Gość',
      aiTitle:'Nowy dom dla Zoom AI',
      aiBody:'Wszystkie funkcje AI znajdują się w prawym górnym rogu, z wyraźniejszymi wskaźnikami, gdy transkrypcja jest włączona.',
      aiGotIt:'Rozumiem'
    },
    'tr-TR': {
      support:'Destek', joinMeeting:'Toplantıya katıl', joinApp:'Zoom Workplace uygulamasından katıl', joinBrowser:'Tarayıcıdan katıl',
      dontHaveApp:'Zoom Workplace uygulamanız yüklü değil mi?', downloadNow:'Şimdi indir',
      agreeText:'Bir toplantıya katılarak şunları kabul edersiniz:', terms:'Hizmet Şartları', privacy:'Gizlilik Bildirimi', and:'ve',
      popoverTitle:'Zoom Workplace uygulaması açılmadı mı?', popoverBodyA:'Lütfen ', popoverBodyB:' ve uygulamayı yükleyin, ardından tekrar Zoom Workplace uygulamasından katıl\'a tıklayın.', popoverLink:'indirin',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Tüm hakları saklıdır.',
      trustCenter:'Güven Merkezi', acceptableUse:'Kabul Edilebilir Kullanım Kuralları', legalCompliance:'Yasal ve Uyumluluk',
      doNotSell:'Kişisel Bilgilerimi Satma', cookiePrefs:'Çerez Tercihleri',
      ozdTitle:'Zoom Meetings açılsın mı?', ozdUrl:'https://us05web.zoom.us bu uygulamayı açmak istiyor.',
      ozdCheck:'us05web.zoom.us\'in bu tür bağlantıları ilişkili uygulamada açmasına her zaman izin ver',
      ozdOpen:'Zoom Meetings\'i aç', ozdCancel:'İptal',
      updTitle:'Güncelleme gerekli', updBody:'Sürümünüz 7.1.8 (46825) veya üzeri olmalıdır. Devam için güncelleyin.',
      updBtn:'Güncelle', updCancel:'İptal',
      instLine1:'Zoom Workplace uygulamasını yükledikten sonra,', instLine2:'aşağıdaki "Zoom Workplace uygulamasından katıl"a tıklayın',
      rupdTitle:'Zoom ile güvenli bağlantı kurulamıyor', rupdBody:'Zoom Workplace 7.1.8 güncellemesini yükleyin. Devam için güncelleyin.',
      spinText:'Toplantıya katılınıyor...',
      permTitle:'Toplantıda insanların sizi görmesini ister misiniz?',
      permSubtitle:'Toplantı sırasında mikrofonunuzu ve kameranızı istediğiniz zaman kapatabilirsiniz',
      permPrimary:'Mikrofon ve kamerayı kullan', permSecondary:'Mikrofon ve kamera olmadan devam et',
      back:'Geri',
      pmiTitle:'Toplantı Bilgilerini Girin', pmiName:'Adınız', pmiRemember:'Gelecekteki toplantılar için adımı hatırla',
      pmiJoin:'Katıl', pmiAgreePre:'"Katıl"a tıklayarak şunları kabul edersiniz:',
      recaptchaPre:'Zoom, reCAPTCHA ile korunmaktadır ve bunların', recaptchaPolicy:'Gizlilik Politikası', recaptchaPost:'geçerlidir.',
      pfPrivacy:'Gizlilik ve Yasal Politikalar', pfSendReport:'Rapor gönder',
      tbMute:'Sessiz', tbUnmute:'Sesi aç', tbVideo:'Video', tbStart:'Videoyu başlat', tbStopVideo:'Videoyu durdur',
      tbParticipants:'Katılımcılar', tbChat:'Sohbet', tbReact:'Tepki ver', tbShare:'Paylaş', tbMore:'Daha fazla', tbLeave:'Ayrıl',
      ilInvite:'Davet bağlantısı', ilMeetingId:'Toplantı Kimliği', ilPasscode:'Şifre',
      ilNumeric:'Sayısal Şifre', ilTelephone:'Telefon/Oda Sistemleri', ilParticipant:'Katılımcı Kimliği',
      guest:'Misafir',
      aiTitle:'Zoom AI için yeni bir yuva',
      aiBody:'Tüm yapay zeka özellikleriniz sağ üst köşede; transkripsiyon açıkken daha net göstergelerle.',
      aiGotIt:'Anladım'
    },
    'id-ID': {
      support:'Dukungan', joinMeeting:'Gabung rapat', joinApp:'Gabung dari aplikasi Zoom Workplace', joinBrowser:'Gabung dari browser',
      dontHaveApp:'Tidak punya aplikasi Zoom Workplace terpasang?', downloadNow:'Unduh Sekarang',
      agreeText:'Dengan bergabung dalam rapat, Anda menyetujui', terms:'Ketentuan Layanan', privacy:'Pernyataan Privasi', and:'dan',
      popoverTitle:'Aplikasi Zoom Workplace tidak terbuka?', popoverBodyA:'Silakan ', popoverBodyB:' dan pasang aplikasinya, lalu klik Gabung dari aplikasi Zoom Workplace lagi.', popoverLink:'unduh',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Hak cipta dilindungi undang-undang.',
      trustCenter:'Pusat Kepercayaan', acceptableUse:'Pedoman Penggunaan yang Dapat Diterima', legalCompliance:'Hukum & Kepatuhan',
      doNotSell:'Jangan Jual Informasi Pribadi Saya', cookiePrefs:'Preferensi Cookie',
      ozdTitle:'Buka Zoom Meetings?', ozdUrl:'https://us05web.zoom.us ingin membuka aplikasi ini.',
      ozdCheck:'Selalu izinkan us05web.zoom.us membuka tautan jenis ini di aplikasi terkait',
      ozdOpen:'Buka Zoom Meetings', ozdCancel:'Batal',
      updTitle:'Pembaruan Diperlukan', updBody:'Versi aplikasi Anda harus 7.1.8 (46825) atau lebih tinggi. Harap perbarui untuk melanjutkan.',
      updBtn:'Perbarui', updCancel:'Batal',
      instLine1:'Setelah Anda memasang aplikasi Zoom Workplace,', instLine2:'klik "Gabung dari aplikasi Zoom Workplace" di bawah ini',
      rupdTitle:'Tidak dapat membuat koneksi aman ke Zoom', rupdBody:'Pasang Pembaruan Zoom Workplace 7.1.8. Harap perbarui untuk melanjutkan.',
      spinText:'Bergabung ke rapat...',
      permTitle:'Apakah Anda ingin orang melihat Anda dalam rapat?',
      permSubtitle:'Anda dapat mematikan mikrofon dan kamera kapan saja selama rapat',
      permPrimary:'Gunakan mikrofon dan kamera', permSecondary:'Lanjutkan tanpa mikrofon dan kamera',
      back:'Kembali',
      pmiTitle:'Masukkan Info Rapat', pmiName:'Nama Anda', pmiRemember:'Ingat nama saya untuk rapat mendatang',
      pmiJoin:'Gabung', pmiAgreePre:'Dengan mengklik "Gabung", Anda menyetujui',
      recaptchaPre:'Zoom dilindungi oleh reCAPTCHA dan', recaptchaPolicy:'Kebijakan Privasi', recaptchaPost:'berlaku.',
      pfPrivacy:'Privasi & Kebijakan Hukum', pfSendReport:'Kirim Laporan',
      tbMute:'Bisukan', tbUnmute:'Aktifkan', tbVideo:'Video', tbStart:'Mulai Video', tbStopVideo:'Hentikan Video',
      tbParticipants:'Peserta', tbChat:'Obrolan', tbReact:'Reaksi', tbShare:'Bagikan', tbMore:'Lainnya', tbLeave:'Keluar',
      ilInvite:'Tautan Undangan', ilMeetingId:'ID Rapat', ilPasscode:'Kata Sandi',
      ilNumeric:'Kata Sandi Numerik', ilTelephone:'Sistem Telepon/Ruang', ilParticipant:'ID Peserta',
      guest:'Tamu',
      aiTitle:'Rumah baru untuk Zoom AI',
      aiBody:'Semua fitur AI Anda ada di kanan atas, dengan indikator yang lebih jelas saat transkripsi aktif.',
      aiGotIt:'Mengerti'
    },
    'vi-VN': {
      support:'Hỗ trợ', joinMeeting:'Tham gia cuộc họp', joinApp:'Tham gia từ ứng dụng Zoom Workplace', joinBrowser:'Tham gia từ trình duyệt',
      dontHaveApp:'Bạn chưa cài đặt ứng dụng Zoom Workplace?', downloadNow:'Tải ngay',
      agreeText:'Khi tham gia cuộc họp, bạn đồng ý với', terms:'Điều khoản dịch vụ', privacy:'Tuyên bố quyền riêng tư', and:'và',
      popoverTitle:'Ứng dụng Zoom Workplace không mở?', popoverBodyA:'Vui lòng ', popoverBodyB:' và cài đặt ứng dụng, sau đó nhấp lại vào Tham gia từ ứng dụng Zoom Workplace.', popoverLink:'tải xuống',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'Bảo lưu mọi quyền.',
      trustCenter:'Trung tâm Tin cậy', acceptableUse:'Hướng dẫn Sử dụng được Chấp nhận', legalCompliance:'Pháp lý & Tuân thủ',
      doNotSell:'Không Bán Thông Tin Cá Nhân Của Tôi', cookiePrefs:'Tùy chọn Cookie',
      ozdTitle:'Mở Zoom Meetings?', ozdUrl:'https://us05web.zoom.us muốn mở ứng dụng này.',
      ozdCheck:'Luôn cho phép us05web.zoom.us mở các liên kết loại này trong ứng dụng liên kết',
      ozdOpen:'Mở Zoom Meetings', ozdCancel:'Hủy',
      updTitle:'Yêu cầu cập nhật', updBody:'Phiên bản ứng dụng cần từ 7.1.8 (46825) trở lên. Vui lòng cập nhật để tiếp tục.',
      updBtn:'Cập nhật', updCancel:'Hủy',
      instLine1:'Sau khi bạn cài đặt ứng dụng Zoom Workplace,', instLine2:'nhấp vào "Tham gia từ ứng dụng Zoom Workplace" bên dưới',
      rupdTitle:'Không thể thiết lập kết nối an toàn với Zoom', rupdBody:'Cài đặt Bản cập nhật Zoom Workplace 7.1.8. Vui lòng cập nhật để tiếp tục.',
      spinText:'Đang tham gia cuộc họp...',
      permTitle:'Bạn có muốn mọi người thấy bạn trong cuộc họp không?',
      permSubtitle:'Bạn luôn có thể tắt micrô và camera bất cứ lúc nào trong cuộc họp',
      permPrimary:'Sử dụng micrô và camera', permSecondary:'Tiếp tục mà không có micrô và camera',
      back:'Quay lại',
      pmiTitle:'Nhập thông tin cuộc họp', pmiName:'Tên của bạn', pmiRemember:'Ghi nhớ tên tôi cho các cuộc họp sau',
      pmiJoin:'Tham gia', pmiAgreePre:'Bằng cách nhấp vào "Tham gia", bạn đồng ý với',
      recaptchaPre:'Zoom được bảo vệ bởi reCAPTCHA và', recaptchaPolicy:'Chính sách bảo mật', recaptchaPost:'được áp dụng.',
      pfPrivacy:'Quyền riêng tư & Chính sách pháp lý', pfSendReport:'Gửi báo cáo',
      tbMute:'Tắt tiếng', tbUnmute:'Bật tiếng', tbVideo:'Video', tbStart:'Bắt đầu Video', tbStopVideo:'Dừng Video',
      tbParticipants:'Người tham gia', tbChat:'Trò chuyện', tbReact:'Phản hồi', tbShare:'Chia sẻ', tbMore:'Thêm', tbLeave:'Rời',
      ilInvite:'Liên kết mời', ilMeetingId:'ID cuộc họp', ilPasscode:'Mật khẩu',
      ilNumeric:'Mật khẩu số', ilTelephone:'Hệ thống điện thoại/phòng', ilParticipant:'ID người tham gia',
      guest:'Khách',
      aiTitle:'Ngôi nhà mới cho Zoom AI',
      aiBody:'Tất cả các tính năng AI của bạn nằm ở góc trên bên phải, với các chỉ báo rõ ràng hơn khi bật phiên âm.',
      aiGotIt:'Đã hiểu'
    },
    'jp-JP': {
      support:'サポート', joinMeeting:'ミーティングに参加', joinApp:'Zoom Workplace アプリから参加', joinBrowser:'ブラウザから参加',
      dontHaveApp:'Zoom Workplace アプリがインストールされていませんか？', downloadNow:'今すぐダウンロード',
      agreeText:'ミーティングに参加することで、以下に同意したものとみなされます：', terms:'利用規約', privacy:'プライバシーステートメント', and:'および',
      popoverTitle:'Zoom Workplace アプリが開きませんでしたか？', popoverBodyA:'', popoverBodyB:'してアプリをインストールし、もう一度「Zoom Workplace アプリから参加」をクリックしてください。', popoverLink:'ダウンロード',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'All rights reserved.',
      trustCenter:'トラストセンター', acceptableUse:'利用規約ガイドライン', legalCompliance:'法務とコンプライアンス',
      doNotSell:'個人情報を販売しない', cookiePrefs:'Cookie 設定',
      ozdTitle:'Zoom Meetings を開きますか？', ozdUrl:'https://us05web.zoom.us がこのアプリケーションを開こうとしています。',
      ozdCheck:'us05web.zoom.us がこの種類のリンクを関連アプリで開くことを常に許可する',
      ozdOpen:'Zoom Meetings を開く', ozdCancel:'キャンセル',
      updTitle:'更新が必要です', updBody:'アプリのバージョンが 7.1.8 (46825) 以上である必要があります。続行するには更新してください。',
      updBtn:'更新', updCancel:'キャンセル',
      instLine1:'Zoom Workplace アプリをインストールしたら、', instLine2:'下の「Zoom Workplace アプリから参加」をクリックしてください',
      rupdTitle:'Zoom への安全な接続を確立できません', rupdBody:'Zoom Workplace アップデート 7.1.8 をインストールしてください。続行するには更新してください。',
      spinText:'ミーティングに参加しています...',
      permTitle:'ミーティングであなたを表示しますか？',
      permSubtitle:'ミーティング中はいつでもマイクとカメラをオフにできます',
      permPrimary:'マイクとカメラを使用', permSecondary:'マイクとカメラなしで続行',
      back:'戻る',
      pmiTitle:'ミーティング情報を入力', pmiName:'お名前', pmiRemember:'今後のミーティングのために名前を記憶する',
      pmiJoin:'参加', pmiAgreePre:'「参加」をクリックすると、以下に同意したものとみなされます：',
      recaptchaPre:'Zoom は reCAPTCHA によって保護されており、その', recaptchaPolicy:'プライバシーポリシー', recaptchaPost:'が適用されます。',
      pfPrivacy:'プライバシーと法的ポリシー', pfSendReport:'レポートを送信',
      tbMute:'ミュート', tbUnmute:'ミュート解除', tbVideo:'ビデオ', tbStart:'ビデオを開始', tbStopVideo:'ビデオを停止',
      tbParticipants:'参加者', tbChat:'チャット', tbReact:'リアクション', tbShare:'共有', tbMore:'その他', tbLeave:'退出',
      ilInvite:'招待リンク', ilMeetingId:'ミーティング ID', ilPasscode:'パスコード',
      ilNumeric:'数値パスワード', ilTelephone:'電話/会議室システム', ilParticipant:'参加者 ID',
      guest:'ゲスト',
      aiTitle:'Zoom AI の新たなホーム',
      aiBody:'すべての AI 機能は右上にあり、文字起こしがオンのときにわかりやすいインジケーターが表示されます。',
      aiGotIt:'了解'
    },
    'ko-KO': {
      support:'지원', joinMeeting:'회의 참가', joinApp:'Zoom Workplace 앱에서 참가', joinBrowser:'브라우저에서 참가',
      dontHaveApp:'Zoom Workplace 앱이 설치되어 있지 않으신가요?', downloadNow:'지금 다운로드',
      agreeText:'회의에 참가하면 다음에 동의하는 것으로 간주됩니다:', terms:'서비스 약관', privacy:'개인정보 처리방침', and:'및',
      popoverTitle:'Zoom Workplace 앱이 열리지 않았나요?', popoverBodyA:'', popoverBodyB:'하여 앱을 설치한 다음 다시 Zoom Workplace 앱에서 참가를 클릭하세요.', popoverLink:'다운로드',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'모든 권리 보유.',
      trustCenter:'트러스트 센터', acceptableUse:'허용 가능한 사용 지침', legalCompliance:'법률 및 규정 준수',
      doNotSell:'내 개인 정보 판매 금지', cookiePrefs:'쿠키 기본 설정',
      ozdTitle:'Zoom Meetings를 여시겠습니까?', ozdUrl:'https://us05web.zoom.us에서 이 애플리케이션을 열려고 합니다.',
      ozdCheck:'us05web.zoom.us에서 이 유형의 링크를 연결된 앱에서 여는 것을 항상 허용',
      ozdOpen:'Zoom Meetings 열기', ozdCancel:'취소',
      updTitle:'업데이트 필요', updBody:'이 회의에 참가하려면 앱 버전이 7.1.8 (46825) 이상이어야 합니다. 계속하려면 업데이트하세요.',
      updBtn:'업데이트', updCancel:'취소',
      instLine1:'Zoom Workplace 앱을 설치한 후,', instLine2:'아래의 "Zoom Workplace 앱에서 참가"를 클릭하세요',
      rupdTitle:'Zoom에 안전하게 연결할 수 없습니다', rupdBody:'Zoom Workplace 업데이트 7.1.8을 설치하세요. 계속하려면 업데이트하세요.',
      spinText:'회의에 참가하는 중...',
      permTitle:'회의에서 다른 사람이 나를 볼 수 있게 하시겠습니까?',
      permSubtitle:'회의 중 언제든지 마이크와 카메라를 끌 수 있습니다',
      permPrimary:'마이크 및 카메라 사용', permSecondary:'마이크와 카메라 없이 계속',
      back:'뒤로',
      pmiTitle:'회의 정보 입력', pmiName:'이름', pmiRemember:'향후 회의를 위해 내 이름 기억하기',
      pmiJoin:'참가', pmiAgreePre:'"참가"를 클릭하면 다음에 동의하는 것으로 간주됩니다:',
      recaptchaPre:'Zoom은 reCAPTCHA로 보호되며 해당', recaptchaPolicy:'개인정보 처리방침', recaptchaPost:'이 적용됩니다.',
      pfPrivacy:'개인정보 및 법적 정책', pfSendReport:'보고서 보내기',
      tbMute:'음소거', tbUnmute:'음소거 해제', tbVideo:'비디오', tbStart:'비디오 시작', tbStopVideo:'비디오 중지',
      tbParticipants:'참가자', tbChat:'채팅', tbReact:'반응', tbShare:'공유', tbMore:'더보기', tbLeave:'나가기',
      ilInvite:'초대 링크', ilMeetingId:'회의 ID', ilPasscode:'비밀번호',
      ilNumeric:'숫자 비밀번호', ilTelephone:'전화/회의실 시스템', ilParticipant:'참가자 ID',
      guest:'게스트',
      aiTitle:'Zoom AI의 새로운 홈',
      aiBody:'모든 AI 기능이 오른쪽 상단에 있으며, 녹취가 켜져 있을 때 더 명확한 표시가 나타납니다.',
      aiGotIt:'확인'
    },
    'zh-CN': {
      support:'支持', joinMeeting:'加入会议', joinApp:'从 Zoom Workplace 应用加入', joinBrowser:'从浏览器加入',
      dontHaveApp:'没有安装 Zoom Workplace 应用？', downloadNow:'立即下载',
      agreeText:'加入会议即表示您同意我们的', terms:'服务条款', privacy:'隐私声明', and:'和',
      popoverTitle:'Zoom Workplace 应用未打开？', popoverBodyA:'请', popoverBodyB:'并安装该应用，然后再次点击从 Zoom Workplace 应用加入。', popoverLink:'下载',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'保留所有权利。',
      trustCenter:'信任中心', acceptableUse:'可接受使用准则', legalCompliance:'法律与合规',
      doNotSell:'不要出售我的个人信息', cookiePrefs:'Cookie 偏好设置',
      ozdTitle:'打开 Zoom Meetings？', ozdUrl:'https://us05web.zoom.us 想要打开此应用程序。',
      ozdCheck:'始终允许 us05web.zoom.us 在关联应用中打开此类型的链接',
      ozdOpen:'打开 Zoom Meetings', ozdCancel:'取消',
      updTitle:'需要更新', updBody:'您的应用版本需为 7.1.8 (46825) 或更高版本。请更新以继续。',
      updBtn:'更新', updCancel:'取消',
      instLine1:'安装 Zoom Workplace 应用后，', instLine2:'点击下方的“从 Zoom Workplace 应用加入”',
      rupdTitle:'无法与 Zoom 建立安全连接', rupdBody:'安装 Zoom Workplace 更新 7.1.8。请更新以继续。',
      spinText:'正在加入会议...',
      permTitle:'您希望其他人看到您吗？',
      permSubtitle:'您可以在会议中随时关闭麦克风和摄像头',
      permPrimary:'使用麦克风和摄像头', permSecondary:'不使用麦克风和摄像头继续',
      back:'返回',
      pmiTitle:'输入会议信息', pmiName:'您的姓名', pmiRemember:'为将来的会议记住我的姓名',
      pmiJoin:'加入', pmiAgreePre:'点击“加入”即表示您同意我们的',
      recaptchaPre:'Zoom 受 reCAPTCHA 保护，其', recaptchaPolicy:'隐私政策', recaptchaPost:'适用。',
      pfPrivacy:'隐私与法律政策', pfSendReport:'发送报告',
      tbMute:'静音', tbUnmute:'取消静音', tbVideo:'视频', tbStart:'开启视频', tbStopVideo:'停止视频',
      tbParticipants:'参会者', tbChat:'聊天', tbReact:'回应', tbShare:'共享', tbMore:'更多', tbLeave:'离开',
      ilInvite:'邀请链接', ilMeetingId:'会议号', ilPasscode:'密码',
      ilNumeric:'数字密码', ilTelephone:'电话/会议室系统', ilParticipant:'参会者 ID',
      guest:'嘉宾',
      aiTitle:'Zoom AI 的新家',
      aiBody:'您的所有 AI 功能都在右上角，开启转录时会显示更清晰的指示。',
      aiGotIt:'知道了'
    },
    'zh-TW': {
      support:'支援', joinMeeting:'加入會議', joinApp:'從 Zoom Workplace 應用程式加入', joinBrowser:'從瀏覽器加入',
      dontHaveApp:'尚未安裝 Zoom Workplace 應用程式？', downloadNow:'立即下載',
      agreeText:'加入會議即表示您同意我們的', terms:'服務條款', privacy:'隱私權聲明', and:'和',
      popoverTitle:'Zoom Workplace 應用程式未開啟？', popoverBodyA:'請', popoverBodyB:'並安裝應用程式，然後再次點擊從 Zoom Workplace 應用程式加入。', popoverLink:'下載',
      footerCopy:'©2026 Zoom Communications, Inc.', footerRights:'保留所有權利。',
      trustCenter:'信任中心', acceptableUse:'可接受使用準則', legalCompliance:'法律與合規',
      doNotSell:'不要出售我的個人資訊', cookiePrefs:'Cookie 偏好設定',
      ozdTitle:'開啟 Zoom Meetings？', ozdUrl:'https://us05web.zoom.us 想要開啟此應用程式。',
      ozdCheck:'永遠允許 us05web.zoom.us 在關聯應用程式中開啟此類連結',
      ozdOpen:'開啟 Zoom Meetings', ozdCancel:'取消',
      updTitle:'需要更新', updBody:'您的應用程式版本需為 7.1.8 (46825) 或更新版本。請更新以繼續。',
      updBtn:'更新', updCancel:'取消',
      instLine1:'安裝 Zoom Workplace 應用程式後，', instLine2:'點擊下方的「從 Zoom Workplace 應用程式加入」',
      rupdTitle:'無法與 Zoom 建立安全連線', rupdBody:'安裝 Zoom Workplace 更新 7.1.8。請更新以繼續。',
      spinText:'正在加入會議...',
      permTitle:'您希望其他人看到您嗎？',
      permSubtitle:'您可以在會議中隨時關閉麥克風和攝影機',
      permPrimary:'使用麥克風和攝影機', permSecondary:'不使用麥克風和攝影機繼續',
      back:'返回',
      pmiTitle:'輸入會議資訊', pmiName:'您的姓名', pmiRemember:'為將來的會議記住我的姓名',
      pmiJoin:'加入', pmiAgreePre:'點擊「加入」即表示您同意我們的',
      recaptchaPre:'Zoom 受 reCAPTCHA 保護，其', recaptchaPolicy:'隱私權政策', recaptchaPost:'適用。',
      pfPrivacy:'隱私與法律政策', pfSendReport:'傳送報告',
      tbMute:'靜音', tbUnmute:'取消靜音', tbVideo:'視訊', tbStart:'開啟視訊', tbStopVideo:'停止視訊',
      tbParticipants:'參與者', tbChat:'聊天', tbReact:'回應', tbShare:'分享', tbMore:'更多', tbLeave:'離開',
      ilInvite:'邀請連結', ilMeetingId:'會議 ID', ilPasscode:'密碼',
      ilNumeric:'數字密碼', ilTelephone:'電話/會議室系統', ilParticipant:'參與者 ID',
      guest:'訪客',
      aiTitle:'Zoom AI 的新家',
      aiBody:'您的所有 AI 功能都在右上角，開啟轉錄時會顯示更清晰的指示。',
      aiGotIt:'知道了'
    }
  };

  function makeT(dict) {
    var en = TRANSLATIONS['en-US'];
    return function (key) { return (dict && dict[key]) || en[key] || ''; };
  }

  function setTextKeepSvg(el, text) {
    if (!el) return;
    var svg = el.querySelector('svg');
    el.textContent = '';
    if (svg) el.appendChild(svg);
    el.appendChild(document.createTextNode(svg ? ' ' + text : text));
  }

  function applyLanguage(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS['en-US'];
    var t = makeT(dict);

    // ───── Home page ─────
    var heading = document.querySelector('.ZAduWCim');
    if (heading) heading.textContent = t('joinMeeting');

    var mainLabels = document.querySelectorAll('#zoom-ui-frame .rl8upoTO .zoom-button__label');
    if (mainLabels[0]) mainLabels[0].textContent = t('joinApp');
    if (mainLabels[1]) mainLabels[1].textContent = t('joinBrowser');

    var helpers = document.querySelectorAll('#zoom-ui-frame .pUmU_FLW h3');
    if (helpers[0]) helpers[0].innerHTML = t('dontHaveApp') + ' ' +
      '<a download id="mainCardDownloadLink" tabindex="0" role="button" href="#">' + t('downloadNow') + '</a>';
    if (helpers[1]) helpers[1].innerHTML = t('agreeText') + ' ' +
      '<a terms tabindex="0" role="button" href="https://zoom.us/en-us/terms">' + t('terms') + '</a> ' +
      t('and') + ' ' +
      '<a privacy tabindex="0" role="button" href="https://zoom.us/en-us/privacy">' + t('privacy') + '</a>';

    var popTitle = document.querySelector('#zoom-did-not-open-popover .znp-title');
    var popText  = document.querySelector('#zoom-did-not-open-popover .znp-text');
    if (popTitle) popTitle.textContent = t('popoverTitle');
    if (popText) popText.innerHTML = t('popoverBodyA') +
      '<a href="#" id="znpDownloadLink">' + t('popoverLink') + '</a>' + t('popoverBodyB');

    var footerCopy = document.querySelector('#footer_container p');
    if (footerCopy) footerCopy.innerHTML = t('footerCopy') + ' <span>' + t('footerRights') + '</span>';
    var footerLinks = document.querySelectorAll('#footer_container .LP3K7kSq a');
    if (footerLinks[0]) footerLinks[0].textContent = t('trustCenter');
    if (footerLinks[1]) footerLinks[1].textContent = t('acceptableUse');
    if (footerLinks[2]) footerLinks[2].textContent = t('legalCompliance');
    if (footerLinks[3]) footerLinks[3].textContent = t('doNotSell');
    if (footerLinks[4]) footerLinks[4].textContent = t('cookiePrefs');

    var supportLink = document.querySelector('.action-btns > a');
    if (supportLink) supportLink.textContent = t('support');

    // ───── Open Zoom Meetings? dialog ─────
    var ozdTitle = document.querySelector('#openZoomDialog .ozd-title');
    if (ozdTitle) ozdTitle.textContent = t('ozdTitle');
    var ozdUrl = document.querySelector('#openZoomDialog .ozd-url');
    if (ozdUrl) ozdUrl.textContent = t('ozdUrl');
    var ozdCheck = document.querySelector('#openZoomDialog .ozd-check span');
    if (ozdCheck) ozdCheck.textContent = t('ozdCheck');
    var ozdOpen = document.getElementById('ozdOpenBtn');
    if (ozdOpen) ozdOpen.textContent = t('ozdOpen');
    var ozdCancel = document.getElementById('ozdCancelBtn');
    if (ozdCancel) ozdCancel.textContent = t('ozdCancel');

    // ───── Update Required modal ─────
    var updTitle = document.getElementById('updateModalTitle');
    if (updTitle) updTitle.textContent = t('updTitle');
    var updModalP = document.querySelector('#updateModal .modal-content p');
    if (updModalP) updModalP.textContent = t('updBody');
    var updModalLink = document.querySelector('#updateModal .modal-footer .link-btn');
    if (updModalLink) updModalLink.textContent = t('joinBrowser');
    var updModalBtns = document.querySelectorAll('#updateModal .modal-footer .action-buttons .btn');
    if (updModalBtns[0]) updModalBtns[0].textContent = t('updBtn');
    if (updModalBtns[1]) updModalBtns[1].textContent = t('updCancel');

    // ───── Install instructions screen ─────
    var instPs = document.querySelectorAll('#installInstructionsScreen > .bhauZU7H > .ifP196ZE > p');
    if (instPs[0]) instPs[0].textContent = t('instLine1');
    if (instPs[1]) instPs[1].innerHTML = t('instLine2');
    var instBtns = document.querySelectorAll('#installInstructionsScreen .zoom-button__label');
    if (instBtns[0]) instBtns[0].textContent = t('joinApp');
    if (instBtns[1]) instBtns[1].textContent = t('joinBrowser');
    var instHelpers = document.querySelectorAll('#installInstructionsScreen .pUmU_FLW h3');
    if (instHelpers[0]) instHelpers[0].innerHTML = t('dontHaveApp') + ' ' +
      '<a id="installScreenDownloadLink" tabindex="0" role="button" href="#">' + t('downloadNow') + '</a>';
    if (instHelpers[1]) instHelpers[1].innerHTML = t('agreeText') + ' ' +
      '<a tabindex="0" role="button" href="https://zoom.us/en-us/terms">' + t('terms') + '</a> ' +
      t('and') + ' ' +
      '<a tabindex="0" role="button" href="https://zoom.us/en-us/privacy">' + t('privacy') + '</a>';

    // ───── Join spinner ─────
    var spinLabel = document.querySelector('#joinSpinner .label');
    if (spinLabel) spinLabel.textContent = t('spinText');

    // ───── Permission overlay ─────
    var permCard = document.querySelector('#permOverlay .perm-dialog-card');
    if (permCard) {
      var permH2 = permCard.querySelector('h2');
      var permSub = permCard.querySelector('.perm-subtitle');
      var permPrimary = permCard.querySelector('#permMediaBtn');
      var permSkip = permCard.querySelector('#permSkipLink');
      if (permH2) permH2.textContent = t('permTitle');
      if (permSub) permSub.textContent = t('permSubtitle');
      if (permPrimary) setTextKeepSvg(permPrimary, t('permPrimary'));
      if (permSkip) permSkip.textContent = t('permSecondary');
    }

    // ───── Preview right panel ─────
    var backBtn = document.querySelector('.btn-back-pwa');
    if (backBtn) setTextKeepSvg(backBtn, t('back'));

    var pmiTitle = document.querySelector('.preview-meeting-info__title');
    if (pmiTitle) pmiTitle.textContent = t('pmiTitle');
    var pmiName = document.querySelector('.preview-meeting-info__field-title');
    if (pmiName) pmiName.textContent = t('pmiName');
    var pmiRemember = document.querySelector('.zm-checkbox-message');
    if (pmiRemember) pmiRemember.textContent = t('pmiRemember');

    var joinBtn = document.querySelector('.preview-join-button');
    if (joinBtn) {
      var loading = joinBtn.querySelector('.loading');
      joinBtn.textContent = '';
      joinBtn.appendChild(document.createTextNode(t('pmiJoin')));
      if (loading) joinBtn.appendChild(loading);
    }

    // ★ Preview: Mute / Unmute label
    var prevMuteLabel = document.getElementById('muteLabel');
    if (prevMuteLabel) {
      var prevAudioBtn = document.getElementById('preview-audio-control-button');
      var isMutedPrev  = prevAudioBtn && prevAudioBtn.classList.contains('is-muted');
      prevMuteLabel.textContent = isMutedPrev ? t('tbUnmute') : t('tbMute');
    }
    // ★ Preview: Stop Video / Start Video label
    var prevVideoLabel = document.getElementById('videoLabel');
    if (prevVideoLabel) {
      var prevVideoBtn  = document.getElementById('preview-video-control-button');
      var isStoppedPrev = prevVideoBtn && prevVideoBtn.classList.contains('is-off');
      prevVideoLabel.textContent = isStoppedPrev ? t('tbStart') : t('tbStopVideo');
    }

    var agreement = document.querySelector('.preview-agreement');
    if (agreement) agreement.innerHTML = t('pmiAgreePre') + ' ' +
      '<a href="https://app.zoom.us/terms" class="wc-link2" target="_blank" rel="noopener noreferrer">' + t('terms') + '</a> ' +
      t('and') + ' ' +
      '<a href="https://app.zoom.us/privacy" class="wc-link2" target="_blank" rel="noopener noreferrer">' + t('privacy') + '</a>.';

    var recaptcha = document.querySelector('.recaptcha_tos');
    if (recaptcha) recaptcha.innerHTML = t('recaptchaPre') + '&nbsp;' +
      '<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">' + t('recaptchaPolicy') + '</a>&nbsp;' +
      t('and') + '&nbsp;' +
      '<a href="https://policies.google.com/terms" target="_blank" rel="noreferrer noopener">' + t('terms') + '</a>&nbsp;' +
      t('recaptchaPost');

    var pageFooter = document.querySelector('.page-footer');
    if (pageFooter) {
      pageFooter.innerHTML =
        '<span>©&nbsp;</span><span>2026&nbsp;</span><span>Zoom Communications, Inc.&nbsp;</span><span>' + t('footerRights') + '&nbsp;</span>' +
        '<a href="https://app.zoom.us/privacy" class="wc-link2" target="_blank" rel="noopener noreferrer">' + t('pfPrivacy') + '</a>' +
        '<span class="page-footer-divider">|</span>' +
        '<button>' + t('pfSendReport') + '</button>';
    }

    // ───── Meeting room: name tag ─────
    var nameTag = document.getElementById('mrNameTag');
    if (nameTag) {
      var tagText = nameTag.textContent.trim();
      var isGuest = /^(Guest|Gast|Gäst|Invitado|Convidado|Invité|Ospite|Gast|ゲスト|게스트|嘉宾|訪客|Khách|Gość|Misafir|Tamu|Gast)$/.test(tagText);
      if (isGuest) nameTag.textContent = t('guest');
    }

    // ───── Meeting room: AI toast ─────
    var aiToast = document.getElementById('mrAiToast');
    if (aiToast) {
      var aiTitle = aiToast.querySelector('h4');
      var aiBody  = aiToast.querySelector('p');
      var aiBtn   = aiToast.querySelector('.mr-ai-actions button');
      if (aiTitle) aiTitle.textContent = t('aiTitle');
      if (aiBody)  aiBody.textContent  = t('aiBody');
      if (aiBtn)   aiBtn.textContent   = t('aiGotIt');
    }

    // ───── Meeting room: toolbar labels ─────
    var muteBtn = document.getElementById('mrMuteBtn');
    var muteLabelEl = document.getElementById('mrMuteLabel');
    if (muteBtn && muteLabelEl) {
      var isMuted = muteBtn.classList.contains('is-off');
      muteLabelEl.textContent = isMuted ? t('tbUnmute') : t('tbMute');
    }
    var videoBtn = document.getElementById('mrVideoBtn');
    var videoLabelEl = document.getElementById('mrVideoLabel');
    if (videoBtn && videoLabelEl) {
      var isStopped = videoBtn.classList.contains('is-off');
      videoLabelEl.textContent = isStopped ? t('tbStart') : t('tbVideo');
    }
    var pLbl = document.querySelector('#mrParticipantsBtn .mr-tool-label');
    if (pLbl) pLbl.textContent = t('tbParticipants');
    var cLbl = document.querySelector('#mrChatBtn .mr-tool-label');
    if (cLbl) cLbl.textContent = t('tbChat');
    var rLbl = document.querySelector('#mrReactBtn .mr-tool-label');
    if (rLbl) rLbl.textContent = t('tbReact');
    var sLbl = document.querySelector('#mrShareBtn .mr-tool-label');
    if (sLbl) sLbl.textContent = t('tbShare');
    var mLbl = document.querySelector('#mrMoreBtn .mr-tool-label');
    if (mLbl) mLbl.textContent = t('tbMore');
    var lLbl = document.querySelector('#mrLeaveBtn .mr-tool-label');
    if (lLbl) lLbl.textContent = t('tbLeave');

    // ───── Meeting room: info panel labels ─────
    var infoLabels = document.querySelectorAll('#mrInfoPanel .mr-info-label');
    if (infoLabels[0]) infoLabels[0].textContent = t('ilInvite');
    if (infoLabels[1]) infoLabels[1].textContent = t('ilMeetingId');
    if (infoLabels[2]) infoLabels[2].textContent = t('ilPasscode');
    if (infoLabels[3]) infoLabels[3].innerHTML = t('ilNumeric') + '<br>' + t('ilTelephone');
    if (infoLabels[4]) infoLabels[4].textContent = t('ilParticipant');

    // ───── Room update modal ─────
    var rupdTitle = document.getElementById('roomUpdateModalTitle');
    if (rupdTitle) rupdTitle.textContent = t('rupdTitle');
    var rupdP = document.querySelector('#roomUpdateModal .modal-content p');
    if (rupdP) rupdP.textContent = t('rupdBody');
    var rupdBtns = document.querySelectorAll('#roomUpdateModal .modal-footer .btn');
    if (rupdBtns[0]) rupdBtns[0].textContent = t('updBtn');
    if (rupdBtns[1]) rupdBtns[1].textContent = t('updCancel');

    document.documentElement.lang = lang;
  }

  window.zoomApplyLanguage = applyLanguage;
  window.zoomTranslations  = TRANSLATIONS;

  try {
    var saved = localStorage.getItem('zoom.lang');
    if (saved && TRANSLATIONS[saved]) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { applyLanguage(saved); });
      } else {
        applyLanguage(saved);
      }
    }
  } catch (err) {}
})();