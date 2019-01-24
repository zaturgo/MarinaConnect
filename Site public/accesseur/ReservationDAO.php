<?php
include_once "baseDeDonnee.php";

Class ReservationDAO
{

    public function listerReservationId($id)
    {
        $LISTER_RESERVATION = "SELECT * FROM reservation WHERE id_client = :id ORDER BY datedebut";
        global $basededonnees;
        $requeteListerReservation = $basededonnees->prepare($LISTER_RESERVATION);
        $requeteListerReservation->bindValue(':id', $id);
        $requeteListerReservation->execute();

        return $requeteListerReservation->fetchAll(PDO::FETCH_OBJ);
    }


    public function listerReservation()
    {
        $LISTER_RESERVATION = "SELECT * FROM reservation ORDER BY datedebut";
        global $basededonnees;
        $requeteListerReservation = $basededonnees->prepare($LISTER_RESERVATION);
        $requeteListerReservation->execute();

        return $requeteListerReservation->fetchAll(PDO::FETCH_OBJ);
    }

    public function listerReservationSelonIdReservation($idreservation)
    {
        $LISTER_RESERVATION = "SELECT * FROM reservation WHERE id = :idreservation";
        global $basededonnees;
        $requeteListerReservation = $basededonnees->prepare($LISTER_RESERVATION);
        $requeteListerReservation->bindValue(':idreservation', $idreservation);

        $requeteListerReservation->execute();

        return $requeteListerReservation->fetchAll(PDO::FETCH_OBJ);
    }


    public function listerReservationSelonDate($date)
    {
        $LISTER_RESERVATION_SELON_DATE = "SELECT * FROM reservation WHERE datedebut <= :datevar AND datefin >= :datevar ORDER BY datedebut";
        global $basededonnees;
        $requeteListerReservationSelonDate = $basededonnees->prepare($LISTER_RESERVATION_SELON_DATE);
        $requeteListerReservationSelonDate->bindValue(':datevar', $date);
        $requeteListerReservationSelonDate->execute();
        return $requeteListerReservationSelonDate->fetchAll(PDO::FETCH_OBJ);
    }


    public function listerReservationEnCours()
    {
        $LISTER_RESERVATION = "SELECT * FROM reservation WHERE datefin >= current_date ORDER BY datedebut ";
        global $basededonnees;
        $requeteListerReservation = $basededonnees->prepare($LISTER_RESERVATION);
        $requeteListerReservation->execute();

        return $requeteListerReservation->fetchAll(PDO::FETCH_OBJ);
    }

    public function listerReservationArchivees()
    {
        $LISTER_RESERVATION = "SELECT * FROM reservation WHERE datefin < current_date ORDER BY datedebut";
        global $basededonnees;
        $requeteListerReservation = $basededonnees->prepare($LISTER_RESERVATION);
        $requeteListerReservation->execute();

        return $requeteListerReservation->fetchAll(PDO::FETCH_OBJ);
    }


    public function ajouterReservation(Reservation $reservation)
    {
        $AJOUTER_RESERVATION = "INSERT INTO reservation(datedebut, datefin, id_client, id_bateau, id_emplacement, electricite, essence, vidange) 
                                VALUES (:datedebut, :datefin, :id_client ,:id_bateau, :id_emplacement,:electricite, :essence, :vidange) RETURNING id";

        global $basededonnees;

        $requeteAjouterReservation = $basededonnees->prepare($AJOUTER_RESERVATION);

        $requeteAjouterReservation->bindValue(':datedebut', $reservation->getDatedebut());
        $requeteAjouterReservation->bindValue(':datefin', $reservation->getDatefin());
        $requeteAjouterReservation->bindValue(':id_client', $reservation->getIdclient());
        $requeteAjouterReservation->bindValue(':id_bateau', $reservation->getIdbateau());
        $requeteAjouterReservation->bindValue(':id_emplacement', $reservation->getIdemplacement());
        $requeteAjouterReservation->bindValue(':essence', $reservation->getEssence());
        $requeteAjouterReservation->bindValue(':electricite', $reservation->getElectricite());
        $requeteAjouterReservation->bindValue(':vidange', $reservation->getVidange());

        $requeteAjouterReservation->execute();
        return $basededonnees->lastInsertId('reservation_id_seq');

    }

    public function modifierReservation(Reservation $reservation, $idreservation)
    {
        $MODIFIER_RESERVATION = "UPDATE reservation SET datedebut = :datedebut, datefin = :datefin, id_bateau = :id_bateau, electricite = :electricite, vidange = :vidange, essence = :essence WHERE id = :idreservation";

        global $basededonnees;

        $requeteModifierReservation = $basededonnees->prepare($MODIFIER_RESERVATION);

        $requeteModifierReservation->bindValue(':datedebut', $reservation->getDatedebut());
        $requeteModifierReservation->bindValue(':datefin', $reservation->getDatefin());
        $requeteModifierReservation->bindValue(':id_bateau', $reservation->getIdbateau());
        $requeteModifierReservation->bindValue(':essence', $reservation->getEssence());
        $requeteModifierReservation->bindValue(':electricite', $reservation->getElectricite());
        $requeteModifierReservation->bindValue(':vidange', $reservation->getVidange());
        $requeteModifierReservation->bindValue(':idreservation', $idreservation);

        $requeteModifierReservation->execute();
    }

    public function trouverReservation($idreservation)
    {
        global $basededonnees;
        $TROUVER_RESERVATION = 'SELECT * FROM reservation WHERE id = :idreservation';
        $requeteTrouverReservation = $basededonnees->prepare($TROUVER_RESERVATION);
        $requeteTrouverReservation->bindValue(':idreservation', $idreservation);
        $requeteTrouverReservation->execute();

        return $requeteTrouverReservation->fetch(PDO::FETCH_OBJ);
    }

    public function supprimerReservation($idreservation)
    {
        global $basededonnees;
        $SUPPRIMER_RESERVATION = 'DELETE FROM reservation WHERE id = :idreservation';
        $requeteSupprimerReservation = $basededonnees->prepare($SUPPRIMER_RESERVATION);
        $requeteSupprimerReservation->bindValue(':idreservation', $idreservation);
        $requeteSupprimerReservation->execute();
    }

    public function listerReservationsSelonTaille($longueur, $largeur){
        global $basededonnees;

        $SELECT_COUNT_RESA= 'SELECT * FROM reservation
        INNER JOIN emplacement ON reservation.id_emplacement = emplacement.id
        WHERE emplacement.largeur >= :largeur AND emplacement.longueur >= :longueur;';

        $requeteResaTaille = $basededonnees->prepare($SELECT_COUNT_RESA);

        $requeteResaTaille->bindValue(':largeur', $largeur);
        $requeteResaTaille->bindValue(':longueur', $longueur);

        $requeteResaTaille->execute();
        return $requeteResaTaille->fetchAll(PDO::FETCH_OBJ);
    }

    public function checkBateauSelonDate($dateDebut, $dateFin, $id_bateau)
    {
        global $basededonnees;

        $CHECK_BATEAU_RESERVER = 'SELECT * FROM reservation WHERE :datedebut <= datefin AND :datefin >= datedebut 
                                AND id_bateau = :idbateau';

        $requeteBateauDejaReserverSelondate = $basededonnees->prepare($CHECK_BATEAU_RESERVER);

        $requeteBateauDejaReserverSelondate->bindValue(':datedebut', $dateDebut);
        $requeteBateauDejaReserverSelondate->bindValue(':datefin', $dateFin);
        $requeteBateauDejaReserverSelondate->bindValue(':idbateau', $id_bateau);

        $requeteBateauDejaReserverSelondate->execute();
        $res = $requeteBateauDejaReserverSelondate->fetch(PDO::FETCH_OBJ);

        if($res !== false) {
            return true;
        }
        return false;
    }

    public function bateauDejaDansReservation($idBateau){
        global $basededonnees;

        $CHECK_BATEAU_RESERVER = 'SELECT * FROM reservation WHERE id_bateau = :idbateau AND datefin >= current_date';

        $requeteBateauDejaReserverSelondate = $basededonnees->prepare($CHECK_BATEAU_RESERVER);

        $requeteBateauDejaReserverSelondate->bindValue(':idbateau', $idBateau);

        $requeteBateauDejaReserverSelondate->execute();
        $res = $requeteBateauDejaReserverSelondate->fetch(PDO::FETCH_OBJ);

        if($res !== false) {
            return true;
        }
        return false;
    }

    public function emplacementDejaDansReservation($idemplacement){
        global $basededonnees;

        $CHECK_EMPLACEMENT_RESERVER = 'SELECT * FROM reservation WHERE id_emplacement = :idemplacement AND datefin >= current_date';

        $requeteBateauDejaReserverSelondate = $basededonnees->prepare($CHECK_EMPLACEMENT_RESERVER);

        $requeteBateauDejaReserverSelondate->bindValue(':idemplacement', $idemplacement);

        $requeteBateauDejaReserverSelondate->execute();
        $res = $requeteBateauDejaReserverSelondate->fetch(PDO::FETCH_OBJ);

        if($res !== false) {
            return true;
        }
        return false;
    }

}