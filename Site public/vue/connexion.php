<?php
include 'headerConnexion.php';
include '../modele/Client.php';
include '../accesseur/ClientDAO.php';
// REDIRECION SI DEJA CONNECTÉ

$ClientDAO = new ClientDAO();

$PASS = 0;
$PSEUDO = null;
$MDP = null;

$erreurs = array();

if (isset($_SESSION['id'])) {
    if ($ClientDAO->trouverClientId($_SESSION['id'])->bool_gerant) {
        header('Location: partieGerant.php');
        exit();
    } else {
        header('Location: partieClient.php');
        exit();
    }
}

if ((isset($_POST['mot_de_passe']))) {
    $MDP = $_POST['mot_de_passe'];
}
if ((isset($_POST['pseudo']))) {
    $PSEUDO = $_POST['pseudo'];
}

if (isset($PSEUDO) && isset($MDP)) {
    connexion($PSEUDO, $MDP);
}
function connexion($PSEUDO, $MDP)
{
    $ClientDAO = new ClientDAO();
    if ($ClientDAO->clientExiste($PSEUDO)) {
        $clientCourant = $ClientDAO->trouverClientMail($PSEUDO);

        if (motDePasseJuste($clientCourant->mot_de_passe, $MDP)) {
            $_SESSION['pseudo'] = $PSEUDO;
            $_SESSION['id'] = $clientCourant->id;

            if ($clientCourant->bool_gerant) {
                header('Location: partieGerant.php');
                exit();
            } else {
                if (isset($_SESSION['redirection'])) {
                    header('Location: ' . $_SESSION['redirection'] . '');
                    exit();
                } else {
                    header('Location: partieClient.php');
                    exit();
                }
            }
        }
    }
}

function motDePasseJuste($motDePasseActuel, $MDP)
{
    return ($motDePasseActuel === md5($MDP));
}


if (($PSEUDO != null) && ($MDP != null)) {
    $erreurs['mot_de_passe'] = '<div class="alert alert-danger">Votre identifiant ou mot de passe est incorrect</div>';
}

?>
<div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6 pb-5">

        <div class="w3-third w3-container">
            <img class="w3-center" src="../img/logo.png">
        </div>

        <legend><?php echo _("Connexion à MarinaConnect"); ?></legend>

        <form class="form-horizontal w3-padding-32" action="connexion.php" method="post">
            <div class="form-group">
                <label class="control-label col-sm-4"><?php echo _("Mail"); ?></label><br>
                <input class="form-control" type="email" name="pseudo"/>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4"><?php echo _("Mot de passe"); ?> </label><br>
                <input class="form-control" type="password" name="mot_de_passe"/>
            </div>
            <?php
            if (isset($erreurs['mot_de_passe'])) {
                echo $erreurs['mot_de_passe'];
            } ?>

            <div class="form-group w3-center">
                <input class="btn btn-primary" type="submit" name="send" value="<?php echo _("Connexion"); ?>">
            </div>

        </form>

        <a href="creerCompte.php"><?php echo _("Créer un compte"); ?></a>
    </div>
</div>

<?php include 'footer.php'; ?>