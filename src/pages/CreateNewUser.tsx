import React, { useState } from "react";
import { IonButton, IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import { UserData } from "../servicesTest/databaseFunctions";
import { Storage } from "@ionic/storage";

const storage = new Storage();
interface CreateNewUserProps {
  setShowCard: any;
  addUser: any;
  setNewUser: any;
  newUser: any;
}

const CreateNewUser = (props: CreateNewUserProps) => {
  const { setShowCard, addUser, setNewUser, newUser } = props;
  const handleInputChange = (e: any, key: any) => {
    if (key === "first" || key === "last") {
      setNewUser({
        ...newUser,
        name: {
          ...newUser.name,
          [key]: e.target.value,
        },
      });
    } else {
      setNewUser({ ...newUser, [key]: e.target.value });
    }
  };

  return (
    <>
      <IonItem>
        <IonLabel position="stacked">First Name</IonLabel>
        <IonInput
          value={newUser.name.first}
          onIonChange={(e) => handleInputChange(e, "first")}
        />
        <IonLabel position="stacked">Last Name</IonLabel>
        <IonInput
          value={newUser.name.last}
          onIonChange={(e) => handleInputChange(e, "last")}
        />
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput
          value={newUser.email}
          onIonChange={(e) => handleInputChange(e, "email")}
        />
        <IonButton onClick={() => addUser(newUser)}>Submit</IonButton>
        <IonButton onClick={() => setShowCard(false)}>Cancel</IonButton>
      </IonItem>
    </>
  );
};

export default CreateNewUser;