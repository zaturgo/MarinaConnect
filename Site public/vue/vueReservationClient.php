<?php
include 'header.php';

include '../accesseur/ReservationDAO.php';
include '../accesseur/ClientDAO.php';
include '../accesseur/BateauDAO.php';
include '../accesseur/EmplacementDAO.php';

$reservationDAO = new ReservationDAO();
$bateauDAO = new BateauDAO();
$clientDAO = new ClientDAO();
$emplacementDAO = new EmplacementDAO();

$donneesReservation = $reservationDAO->listerReservationId($_SESSION['id']);

?>
    <!-- Modal -->
    <div class="modal fade" id="success" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><?php echo _("Confirmation")?></h5>
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <?php echo _("Un mail de confirmation vous a été envoyé!")?>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <div class="p-lg-5 p-md-3">
        <h1><?php echo _("Recapitulatif de mes réservations :")?></h1>

        <div class="table-responsive">
            <table border="2" class="table table-striped table-hover">
                <?php if (isset($donneesReservation[0])): ?>
                    <thead>
                    <tr>
                        <th><?php echo _("Prénom")?></th>
                        <th><?php echo _("Nom")?></th>
                        <th><?php echo _("Date de début de réservation")?></th>
                        <th><?php echo _("Date de fin de réservation")?></th>
                        <th><?php echo _("Bateau")?></th>
                        <th><?php echo _("Emplacement")?></th>
                        <th><?php echo _("Electricité")?></th>
                        <th><?php echo _("Essence")?></th>
                        <th><?php echo _("Vidange")?></th>
                        <th><?php echo _("Détails")?></th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($donneesReservation as $reservation) : ?>
                        <tr>
                            <td>
                                <?php echo $clientDAO->trouverClientId($reservation->id_client)->nom; ?>
                            </td>
                            <td>
                                <?php echo $clientDAO->trouverClientId($reservation->id_client)->prenom; ?>
                            </td>
                            <td>
                                <?php echo $reservation->datedebut; ?>
                            </td>
                            <td>
                                <?php echo $reservation->datefin; ?>
                            </td>
                            <td>
                                <?php echo $bateauDAO->trouverBateau($reservation->id_bateau)->nom ?>
                            </td>
                            <td>
                                <?php echo $emplacementDAO->trouverEmplacement($reservation->id_emplacement)->label ?>
                            </td>
                            <td>
                                <?php if ($reservation->electricite) {
                                    echo 'X';
                                } else echo 'O'; ?>
                            </td>
                            <td>
                                <?php if ($reservation->essence) {
                                    echo 'X';
                                } else echo 'O'; ?>
                            </td>
                            <td>
                                <?php if ($reservation->vidange) {
                                    echo 'X';
                                } else echo 'O'; ?>
                            </td>
                            <td>
                                <a class="btn btn-outline-info "
                                   href="vueReservationDetailClient.php?idreservation=<?php echo $reservation->id ?>"><?php echo _("Détails") ?>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                <?php else: ?>
                    <tr>
                        <td><?php echo _("Pas de réservation")?></td>
                    </tr>
                <?php endif; ?>
            </table>
        </div>

        <?php if (isset($_GET['success'])) {
            if ($_GET['success'] == 1){
                ?> <script type='text/javascript'>
               $(document).ready(function () {
            
                $('#success').modal('show');
            
            });
            </script> <?php
            }

        else
            echo _("Il y a eu un problème avec l'envoi du mail de confirmation.");

        } ?>

        <div class="span12">
            <a class="btn btn-outline-secondary btn-lg" style="text-align: center;" href="partieClient.php"><?php echo _("Retour")?></a>
            <a class="btn btn-primary btn-lg" href="vueAjouterReservationClient.php?id=<?php echo $_SESSION['id'] ?>"><?php echo _("Réserver")?></a>
        </div>
    </div>

<?php include 'footer.php'; ?>