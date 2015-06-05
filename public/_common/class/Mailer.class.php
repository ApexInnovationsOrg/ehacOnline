<?php
/**
 * Class to send mail to recipients
 *
 * This class is responsible sending mail to recipients. 
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class Mailer {
	// *** Private Properties ***
	// Previously encoded attachments
	private $attachments = array();
	
	// Types of attachments we can handle
	private $ATTACHMENT_TYPES = array (
		'' => 'application/octet-stream',
		'323' => 'text/h323',
		'acx' => 'application/internet-property-stream',
		'ai' => 'application/postscript',
		'aif' => 'audio/x-aiff',
		'aifc' => 'audio/x-aiff',
		'aiff' => 'audio/x-aiff',
		'asf' => 'video/x-ms-asf',
		'asr' => 'video/x-ms-asf',
		'asx' => 'video/x-ms-asf',
		'au' => 'audio/basic',
		'avi' => 'video/x-msvideo',
		'axs' => 'application/olescript',
		'bas' => 'text/plain',
		'bcpio' => 'application/x-bcpio',
		'bin' => 'application/octet-stream',
		'bmp' => 'image/bmp',
		'c' => 'text/plain',
		'cat' => 'application/vnd.ms-pkiseccat',
		'cdf' => 'application/x-cdf',
		'cer' => 'application/x-x509-ca-cert',
		'class' => 'application/octet-stream',
		'clp' => 'application/x-msclip',
		'cmx' => 'image/x-cmx',
		'cod' => 'image/cis-cod',
		'cpio' => 'application/x-cpio',
		'crd' => 'application/x-mscardfile',
		'crl' => 'application/pkix-crl',
		'crt' => 'application/x-x509-ca-cert',
		'csh' => 'application/x-csh',
		'css' => 'text/css',
		'dcr' => 'application/x-director',
		'der' => 'application/x-x509-ca-cert',
		'dir' => 'application/x-director',
		'dll' => 'application/x-msdownload',
		'dms' => 'application/octet-stream',
		'doc' => 'application/msword',
		'dot' => 'application/msword',
		'dvi' => 'application/x-dvi',
		'dxr' => 'application/x-director',
		'eps' => 'application/postscript',
		'etx' => 'text/x-setext',
		'evy' => 'application/envoy',
		'exe' => 'application/octet-stream',
		'fif' => 'application/fractals',
		'flr' => 'x-world/x-vrml',
		'gif' => 'image/gif',
		'gtar' => 'application/x-gtar',
		'gz' => 'application/x-gzip',
		'h' => 'text/plain',
		'hdf' => 'application/x-hdf',
		'hlp' => 'application/winhlp',
		'hqx' => 'application/mac-binhex40',
		'hta' => 'application/hta',
		'htc' => 'text/x-component',
		'htm' => 'text/html',
		'html' => 'text/html',
		'htt' => 'text/webviewhtml',
		'ico' => 'image/x-icon',
		'ief' => 'image/ief',
		'iii' => 'application/x-iphone',
		'ins' => 'application/x-internet-signup',
		'isp' => 'application/x-internet-signup',
		'jfif' => 'image/pipeg',
		'jpe' => 'image/jpeg',
		'jpeg' => 'image/jpeg',
		'jpg' => 'image/jpeg',
		'js' => 'application/x-javascript',
		'latex' => 'application/x-latex',
		'lha' => 'application/octet-stream',
		'lsf' => 'video/x-la-asf',
		'lsx' => 'video/x-la-asf',
		'lzh' => 'application/octet-stream',
		'm13' => 'application/x-msmediaview',
		'm14' => 'application/x-msmediaview',
		'm3u' => 'audio/x-mpegurl',
		'man' => 'application/x-troff-man',
		'mdb' => 'application/x-msaccess',
		'me' => 'application/x-troff-me',
		'mht' => 'message/rfc822',
		'mhtml' => 'message/rfc822',
		'mid' => 'audio/mid',
		'mny' => 'application/x-msmoney',
		'mov' => 'video/quicktime',
		'movie' => 'video/x-sgi-movie',
		'mp2' => 'video/mpeg',
		'mp3' => 'audio/mpeg',
		'mpa' => 'video/mpeg',
		'mpe' => 'video/mpeg',
		'mpeg' => 'video/mpeg',
		'mpg' => 'video/mpeg',
		'mpp' => 'application/vnd.ms-project',
		'mpv2' => 'video/mpeg',
		'ms' => 'application/x-troff-ms',
		'mvb' => 'application/x-msmediaview',
		'nws' => 'message/rfc822',
		'oda' => 'application/oda',
		'p10' => 'application/pkcs10',
		'p12' => 'application/x-pkcs12',
		'p7b' => 'application/x-pkcs7-certificates',
		'p7c' => 'application/x-pkcs7-mime',
		'p7m' => 'application/x-pkcs7-mime',
		'p7r' => 'application/x-pkcs7-certreqresp',
		'p7s' => 'application/x-pkcs7-signature',
		'pbm' => 'image/x-portable-bitmap',
		'pdf' => 'application/pdf',
		'pfx' => 'application/x-pkcs12',
		'pgm' => 'image/x-portable-graymap',
		'pko' => 'application/ynd.ms-pkipko',
		'pma' => 'application/x-perfmon',
		'pmc' => 'application/x-perfmon',
		'pml' => 'application/x-perfmon',
		'pmr' => 'application/x-perfmon',
		'pmw' => 'application/x-perfmon',
		'pnm' => 'image/x-portable-anymap',
		'pot,' => 'application/vnd.ms-powerpoint',
		'ppm' => 'image/x-portable-pixmap',
		'pps' => 'application/vnd.ms-powerpoint',
		'ppt' => 'application/vnd.ms-powerpoint',
		'prf' => 'application/pics-rules',
		'ps' => 'application/postscript',
		'pub' => 'application/x-mspublisher',
		'qt' => 'video/quicktime',
		'ra' => 'audio/x-pn-realaudio',
		'ram' => 'audio/x-pn-realaudio',
		'ras' => 'image/x-cmu-raster',
		'rgb' => 'image/x-rgb',
		'rmi' => 'audio/mid',
		'roff' => 'application/x-troff',
		'rtf' => 'application/rtf',
		'rtx' => 'text/richtext',
		'scd' => 'application/x-msschedule',
		'sct' => 'text/scriptlet',
		'setpay' => 'application/set-payment-initiation',
		'setreg' => 'application/set-registration-initiation',
		'sh' => 'application/x-sh',
		'shar' => 'application/x-shar',
		'sit' => 'application/x-stuffit',
		'snd' => 'audio/basic',
		'spc' => 'application/x-pkcs7-certificates',
		'spl' => 'application/futuresplash',
		'src' => 'application/x-wais-source',
		'sst' => 'application/vnd.ms-pkicertstore',
		'stl' => 'application/vnd.ms-pkistl',
		'stm' => 'text/html',
		'svg' => 'image/svg+xml',
		'sv4cpio' => 'application/x-sv4cpio',
		'sv4crc' => 'application/x-sv4crc',
		'swf' => 'application/x-shockwave-flash',
		't' => 'application/x-troff',
		'tar' => 'application/x-tar',
		'tcl' => 'application/x-tcl',
		'tex' => 'application/x-tex',
		'texi' => 'application/x-texinfo',
		'texinfo' => 'application/x-texinfo',
		'tgz' => 'application/x-compressed',
		'tif' => 'image/tiff',
		'tiff' => 'image/tiff',
		'tr' => 'application/x-troff',
		'trm' => 'application/x-msterminal',
		'tsv' => 'text/tab-separated-values',
		'txt' => 'text/plain',
		'uls' => 'text/iuls',
		'ustar' => 'application/x-ustar',
		'vcf' => 'text/x-vcard',
		'vrml' => 'x-world/x-vrml',
		'wav' => 'audio/x-wav',
		'wcm' => 'application/vnd.ms-works',
		'wdb' => 'application/vnd.ms-works',
		'wks' => 'application/vnd.ms-works',
		'wmf' => 'application/x-msmetafile',
		'wps' => 'application/vnd.ms-works',
		'wri' => 'application/x-mswrite',
		'wrl' => 'x-world/x-vrml',
		'wrz' => 'x-world/x-vrml',
		'xaf' => 'x-world/x-vrml',
		'xbm' => 'image/x-xbitmap',
		'xla' => 'application/vnd.ms-excel',
		'xlc' => 'application/vnd.ms-excel',
		'xlm' => 'application/vnd.ms-excel',
		'xls' => 'application/vnd.ms-excel',
		'xlt' => 'application/vnd.ms-excel',
		'xlw' => 'application/vnd.ms-excel',
		'xof' => 'x-world/x-vrml',
		'xpm' => 'image/x-xpixmap',
		'xwd' => 'image/x-xwindowdump',
		'z' => 'application/x-compress',
		'zip' => 'application/zip'
	);
	
	
	// *** Protected Properties ***
	// Returns the CSS to use in the e-mail
	protected $css = "  h1,h2,p,li {font-family: 'Verdana, Arial, Helvetica, sans-serif';}
  h1 {font-size: 15px; color: #000;}
  h2 {font-size: 14px; color: #900;}
  p, li {font-size: 13px; color: black;}
  .legal {font-size: 9px; color: #aaa;}
  img {border: 0;}
  table.data {border: 1px solid #aaa; border-collapse: collapse;}
  table.data th {color: white; background: rgb(162,4,0); border: 1px solid #aaa; padding: 1px 4px; margin: 0; vertical-align: text-top;}
  table.data td {color: black; background: white; border: 1px solid #aaa; padding: 1px 4px; margin: 0; vertical-align: text-top;}\n";
	
	
	// *** Public Methods ***
	// Adds attachments to the cache to be sent out with every subsequent email - until ClearAttachments() called
	// $attachments is an array of filenames, e.g. ("c:\test.txt", "c:\test2.xls"), or just single string of filename
	final public function add_attachments($attachments) {
		if (!is_array($attachments)) $attachments = array($attachments);
		
		foreach($attachments as $attachment) {
			if (is_file($attachment)) {   
				// Open the File for Attachment
				$file_name = substr($attachment, (strrpos($attachment, '/') + 1));
				
				$fp = fopen($attachment, 'rb');
				$contents = chunk_split(base64_encode(fread($fp, filesize($attachment))));    //Encode The Data For Transition using base64_encode();
				fclose($fp);
				
				// Attach it
				$msg  = 'Content-Type: ' . $this->ATTACHMENT_TYPES[substr($attachment,(strrpos($attachment, '.') + 1))] . '; name="' . $file_name . '"' . PHP_EOL;
				$msg .= 'Content-Transfer-Encoding: base64' . PHP_EOL;
				$msg .= 'Content-Description: ' . $file_name . PHP_EOL;
				$msg .= 'Content-Disposition: attachment; filename="' .$file_name . '"' . PHP_EOL . PHP_EOL;
				$msg .= $contents . PHP_EOL . PHP_EOL;
				
				array_push($this->attachments, $msg);
			}
		}
	}
	
	// Clears any cached attachments
	final public function clear_attachments() {
		$this->attachments = array();
	}
	
	
	// Sends the e-mail
	// $to, $cc, $bcc are either arrays or comman separated lists of e-mail addresses, each one of the form:
	//		abc@xyz.com			or			User Name <abc@xyz.com>
	// $body is the minimally HTML formatted (<p>, <b>, <i>, <ul>, <ol>, <table>, <img>, <br>) body of the message
	public function send($to, $subject, $body, $from = 'Apex Innovations <webmaster@apexinnovations.com>', $cc = NULL, $bcc = NULL) {
		// Reformat the $to list, weeding out unacceptable e-mail addresses
		$to = $this->validate_addresses($to);
		$cc = $this->validate_addresses($cc);
		$bcc = $this->validate_addresses($bcc);
		if ($to == '' && $cc == '' && $bcc == '') {
			return false;
		}
		
		// For Outlook 2007, need to add in <font> tags inside all <p> and <li> tags
		$message = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN' 'http://www.w3.org/TR/html4/loose.dtd'>
<html>
<head>
 <meta http-equiv='Content-Language' content='en-us'>
 <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
 <title>$subject</title>
 <style type='text/css'>\n" . 
$this->css .
" </style>
</head>
<body>\n" . 
$this->reformat($body) .
"</body>
</html>";

		$mime_boundary = md5(time());
		
		// Common Headers
		$headers  = 'From: ' . $from . PHP_EOL;
		$headers .= 'Reply-To: ' . $from . PHP_EOL;
		$headers .= 'Return-Path: ' . $from . PHP_EOL;
		$headers .= 'Message-ID: <' . date('YmdHis.') . $this->rand_string(5) . '@webmail.apexinnovations.com>' . PHP_EOL;
		$headers .= 'X-Mailer: PHP v' . phpversion() . PHP_EOL;
		if ($cc != '') $headers .= 'Cc: ' . $cc . PHP_EOL;
		if ($bcc != '') $headers .= 'Bcc: ' . $bcc . PHP_EOL;
		
		// Boundry for marking the split & Multitype Headers
		$headers .= 'MIME-Version: 1.0' . PHP_EOL;
		$headers .= 'Content-Type: multipart/mixed; boundary="' . $mime_boundary . '"' . PHP_EOL . PHP_EOL;
		
		// Open the first part of the mail
		$msg = '--' . $mime_boundary . PHP_EOL;
		
		$htmlalt_mime_boundary = $mime_boundary . '_htmlalt'; //we must define a different MIME boundary for this section
		
		// Setup for text OR html -
		$msg .= 'Content-Type: multipart/alternative; boundary="' . $htmlalt_mime_boundary . '"' . PHP_EOL . PHP_EOL;
/*		
		// Text Version
		$msg .= '--' . $htmlalt_mime_boundary . PHP_EOL;
		$msg .= 'Content-Type: text/plain; charset=iso-8859-1' . PHP_EOL;
		$msg .= 'Content-Transfer-Encoding: 8bit' . PHP_EOL . PHP_EOL;
		$msg .= $this->plain_text($message) . PHP_EOL . PHP_EOL;
*/	
		// HTML Version
		$msg .= '--' . $htmlalt_mime_boundary . PHP_EOL;
		$msg .= 'Content-Type: text/html; charset=iso-8859-1' . PHP_EOL;
		$msg .= 'Content-Transfer-Encoding: 8bit' . PHP_EOL . PHP_EOL;
		$msg .= $message . PHP_EOL . PHP_EOL;
		
		// Close the html/plain text alternate portion
		$msg .= '--' . $htmlalt_mime_boundary . '--' . PHP_EOL . PHP_EOL;
		
		// Add any previously saved attachments
		if (count($this->attachments) > 0) {
			foreach($this->attachments as $attachment) {
				// Attach it
				$msg .= '--' . $mime_boundary . PHP_EOL;
				$msg .= $attachment;
			}
		}
		
		// End the MIME type boundary
		$msg .= '--' . $mime_boundary . '--' . PHP_EOL . PHP_EOL;  // finish with two eol's for better security against injection.
		
		// SEND THE EMAIL
//		ini_set('sendmail_from', $from);  // the INI lines are to force the From Address to be used !
		$mail_sent = mail($to, $subject, $msg, $headers);
//		ini_restore('sendmail_from');
		
		return $mail_sent;
	}
	
	
	// *** Protected Methods ***
	// Reformats the HTML as needed - primarily for Outlook compliance
	protected function reformat($html) {
		// These are all hacks so the e-mail looks as it should in Outlook 2007, Outlook 2010
		$html = preg_replace('/<p(.*)>(.*)<\/p>/Uis', '<p$1><font face="Verdana, Arial, Helvetica, sans-serif">$2</font></p>', $html);
		$html = preg_replace('/<li(.*)>(.*)<\/li>/Uis', '<li$1><font face="Verdana, Arial, Helvetica, sans-serif">$2</font></li>', $html);
		$html = preg_replace('/<td(.*)>(.*)<\/td>/Uis', '<td$1><font face="Verdana, Arial, Helvetica, sans-serif">$2</font></td>', $html);
		$html = preg_replace('/<th(.*)>(.*)<\/th>/Uis', '<th$1><font face="Verdana, Arial, Helvetica, sans-serif">$2</font></th>', $html);
		$html = preg_replace('/<h([1-9])(.*)>(.*)<\/h[1-9]>/Uis', '<h$1$2><font face="Verdana, Arial, Helvetica, sans-serif">$3</font></h$1>', $html);
		
		return $html;
	}
	
	
	// *** Private Methods ***
	// Converts the HTML to plain text
	private function plain_text($html) {
		return strip_tags(str_replace('<br>', PHP_EOL, substr($html, (strpos($html, '<body>') + 6))));
	}

	// Creates a random string of length = $len using the characters specified by $chars
	private function rand_string($len, $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
		for ($i = 0, $s = ''; $i < $len; $i++) {
			$s .= $chars{mt_rand(0, strlen($chars)-1)};
		}
		return $s;
	}
	
	// Validates an array or comma-separated list of e-mail addresses, each of the form:
	//		abc@xyz.com			or			User Name <abc@xyz.com>
	private function validate_addresses($addrList) {
		if (is_null($addrList)) return '';
		
		if (is_array($addrList)) {
			$addrArray = $addrList;
		} else {
			$addrArray = explode(',', $addrList);
		}
		
		$addrList = $email = $name = '';
		foreach($addrArray as $elem) {
			if (($lt = strpos($elem, '<')) !== false) {
				$name = trim(substr($elem, 0, $lt));
	
				if (($gt = strpos($elem, '>')) !== false) {
					$email = trim(substr($elem, $lt + 1, $gt - $lt - 1));
				}
			} else {
				$email = trim($elem);
			}
			// Based on RFC 2822, here is best pattern to match - still restricts names with quoted sections, but that is deprecated anyway
			if (preg_match("/^([_a-z0-9-\!\#\$\%\&\'\*\+\/\=\?\^\`\|\~]+)(\.[_a-z0-9-\!\#\$\%\&\'\*\+\/\=\?\^\`\|\~]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/i", $email) && strpos($email, '..') === false) {
				if ($name == '') {
					$addrList .= "$email, ";
				} else {
					$addrList .= "$name <$email>, ";
				}
			}
		}
		if ($addrList != '') $addrList = substr($addrList, 0, -2);	// remove last trailing comma and space
		
		return $addrList;
	}
}