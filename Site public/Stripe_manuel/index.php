<?php
session_start();
//https://stackoverflow.com/questions/33775897/how-do-i-install-the-ext-curl-extension-with-php-7
//sudo apt-get install php-curl
//sudo service apache2 restart

// * sudo apt-get install php7.0-mbstring
// https://askubuntu.com/questions/851847/how-to-enable-and-disable-php7-modules-in-linux-server-16-4
//mbstring
//phpenmod moduleName       enables a module to php7 (restart apache after that sudo service apache2 restart)

//error_reporting(E_ALL & ~E_NOTICE);

require_once('../lib/stripe/init.php');
require_once('./config.php');

$_SESSION['datedebut'] = $_GET['datedebut'];
$_SESSION['datefin'] = $_GET['datefin'];
$_SESSION['idreservation'] = $_GET['idreservation'];

include '../vue/header.php';
include '../accesseur/FactureDAO.php';

$factureDAO = new FactureDAO();

$statut = "var_nok";

if ($_SESSION['idreservation'] && $donneesFacture = $factureDAO->lireFacture($_SESSION['idreservation']))
    if (isset($donneesFacture->prix_electricite_par_pied_carre) ||
        isset($donneesFacture->prix_emplacement_par_pied_carre) ||
        isset($donneesFacture->date_debut) ||
        isset($donneesFacture->date_fin) ||
        isset($donneesFacture->electricite) ||
        isset($donneesFacture->essence) ||
        isset($donneesFacture->vidange) ||
        isset($donneesFacture->nom_bateau) ||
        isset($donneesFacture->longueur_emplacement) ||
        isset($donneesFacture->largeur_emplacement) ||
        isset($donneesFacture->id_client) ||
        isset($donneesFacture->nom_client) ||
        isset($donneesFacture->prenom_client) ||
        isset($donneesFacture->date_creation))
    {
        $date_debut = new DateTime($donneesFacture->date_debut);
        $date_fin = new DateTime($donneesFacture->date_fin);
        $duree = date_diff($date_debut, $date_fin)->days;

        $prix_emplacement = $donneesFacture->prix_emplacement_par_pied_carre *
            $donneesFacture->longueur_emplacement *
            $donneesFacture->largeur_emplacement *
            $duree;

        $prix_reservation = $prix_emplacement;

        if($donneesFacture->electricite === 1) {
            $prix_electricite = $donneesFacture->prix_electricite_par_pied_carre *
                $donneesFacture->longueur_emplacement *
                $donneesFacture->largeur_emplacement*
                $duree;
            $prix_reservation += $prix_electricite;
        }
        $statut = "var_ok";
        $_SESSION['montant'] = round($prix_reservation);
    }
?>

    <h1 xmlns="http://www.w3.org/1999/html">Votre facture</h1>

    <?php if($statut === "var_ok"): ?>
    <div>
        <div>
            <p>Marina de Matane<br>
                175 rue du Barachois<br>
                CP122<br>
                Matane (Québec)<br>
                G4W 3N1</p>
        </div>
        <div>
            <p><?php echo $donneesFacture->nom_client ?> <?php echo $donneesFacture->prenom_client ?><br>
                Client n°<?php echo $donneesFacture->id_client ?></p>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-hover"  border="2" style="text-align: center;">
            <thead>
            <tr>
                <th>Date</th>
                <th>Facture n°</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><?php echo $donneesFacture->date_creation; ?></td>
                <td>FAC<?php echo $donneesFacture->id_facture; ?></td>
            </tr>
            </tbody>
        </table>
    </div>
    <?php endif; ?>

    <div class="table-responsive">
        <table class="table table-striped table-hover"  border="2" style="text-align: center;">
            <?php if($statut === "var_ok"): ?>
                <thead>
                    <tr>
                        <th>Désignation</th>
                        <th>P.U./pi²/nuit</th>
                        <th>P.U. H.T.</th>
                        <th>Total H.T.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Emplacement de port</td>
                        <td></td>
                        <td></td>
                        <td><?php echo $prix_reservation; ?>$</td>
                    </tr>
                    <tr>
                        <td>- Emplacement : <?php echo $donneesFacture->id_emplacement; ?></td>
                        <td><?php echo $donneesFacture->prix_emplacement_par_pied_carre; ?>$</td>
                        <td><?php echo $prix_emplacement; ?>$</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Bateau : <?php echo $donneesFacture->nom_bateau; ?></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Date de début : <?php echo $date_debut->format("d/m/Y"); ?></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>- Date de fin : <?php echo $date_fin->format("d/m/Y"); ?></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <?php if($donneesFacture->electricite === 1) {
                            echo '<td>- Avec électricité</td>';
                            echo '<td>' . $donneesFacture->prix_electricite_par_pied_carre . '$</td>';
                            echo '<td>' . $prix_electricite . '$</td>';
                        } else {
                            echo '<td>- Sans électricité</td>';
                            echo '<td></td>';
                            echo '<td></td>';
                        } ?>
                        <td></td>
                    </tr>
                    <tr>
                        <?php if($donneesFacture->essence === 1) {
                            echo '<td>- Avec essence</td>';
                        } else {
                            echo '<td>- Sans essence</td>';
                        } ?>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <?php if($donneesFacture->vidange === 1) {
                            echo '<td>- Avec vidange</td>';
                        } else {
                            echo '<td>- Sans vidange</td>';
                        } ?>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            <?php else: ?>
                <tr>
                    <td>Cette facture n'existe pas ou est incomplète.</td>
                </tr>
            <?php endif; ?>
        </table>

        <form action="charge.php" method="post">


            <script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                    data-key="<?php echo $stripe['publishable_key']; ?>"
                    data-description="Access for a year"
                    data-amount="<?php echo $prix_reservation * 100; ?>"
                    data-locale="auto">

            </script>

        </form>

        <a class="btn btn-outline-secondary btn-lg" style="text-align: center;" href="../vue/partieClient.php">Retour</a>
    </div>

<?php include "../vue/footer.php"; ?>
