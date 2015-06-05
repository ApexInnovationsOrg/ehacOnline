<?php
/**
 * Class to send email to users
 *
 * This class is responsible sending out email to users
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class ApexMailer extends Mailer {
	// *** Public Methods ***
	// Send the message
	public function send($to, $subject, $message, $from = 'Apex Developers <developers@apexinnovations.com>', $cc = '', $bcc = '') {
		$body = " <table width='600' cellpadding='0' cellspacing='0' style='border: 1px solid #ccc;'>
  <tr>
   <td width='180'><img src='http://www.apexinnovations.com/images/apex_logo.gif' width='180' height='80' alt='Apex Innovations: Changing the Art of Education'></td>
   <td width='420'><img src='http://www.apexinnovations.com/images/apex_mail_banner.gif' width='420' height='80' alt='From the Apex Innovations Team'></td>
  </tr>
  <tr>
   <td width='180' valign='top'><img src='http://www.apexinnovations.com/images/apex_mail_menu3.gif' width='180' height='396' usemap='#menuMap' alt=''></td>
   <td width='420' valign='top'>
    <table border='0' width='100%' cellspacing='0' cellpadding='3' id='table1'>
     <tr>
      <td>
       $message
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <table width='600' cellpadding='0' cellspacing='0' border='0'>
  <tr>
   <td colspan='2'>
    <p class='legal'><font size='1' color='#aaa' face='Verdana, Arial, Helvetica, sans-serif'>This transmission is covered by the Electronic Communications Privacy Act, 18 U.S.C. &amp;sect;&amp;sect; 2510-2521 and is legally privileged. The information contained in this transmission is confidential information, proprietary to the sender and legally protected. Its purpose is intended for the sole use of the individual(s) or entity named in the message header. If the reader of this message is not the intended recipient, or the employee or agent responsible to deliver it to the intended recipient, you are hereby notified that any dissemination, distribution or copying of this communication is strictly prohibited.  If you received this communication in error, please immediately notify us, 337-216-4599 and destroy the original file.</font></p>
   </td>
  </tr>
 </table>
 <map name='menuMap'>
  <area href='http://www.apexinnovations.com/Home.php' coords='0,4,180,29' alt='Go to Our Home Page'>
  <area href='http://www.apexinnovations.com/Products.php' coords='0,30,180,55' alt='Learn About Our Educational Products'>
  <area href='http://www.apexinnovations.com/AboutUs.php' coords='0,56,180,81' alt='Get to Know Apex Innovations'>
  <area href='http://www.apexinnovations.com/Resources.php' coords='0,82,180,107' alt='See How Apex Innovations is Interacting'>
  <area href='http://www.apexinnovations.com/ContactUs.php' coords='0,108,180,132' alt='Get in Touch With Us'>
 </map>\n";
 
		return parent::send($to, $subject, $body, $from, $cc, $bcc);
	}
}