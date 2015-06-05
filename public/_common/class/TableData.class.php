<?php
/**
 * Abstract base class for all web data retrieval for data tables.
 *
 * This class is responsible for gathering data for a jQuery dataTable, which can be automatically sorted, filtered, paginated
 *
 * @copyright	Copyright (c) 2010-2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.1
 */
abstract class TableData extends BaseURI {
	// *** Protected Properties ***
	protected $default_sort = '';		// The default sort order to use (e.g. 'ID DESC')
	protected $column_names = array();	// The list of column names used in the SQL statement


	// *** Public Methods ***
	// Called to instantiate the page
	public function __construct($args) {
		parent::__construct($args);
		
		if (isset($args['default_sort'])) $this->default_sort = $args['default_sort'];
		if (isset($args['sql_count_all'])) $this->sql_count_all = $args['sql_count_all'];
		if (isset($args['column_names'])) $this->column_names = $args['column_names'];
	}
	
	public function output_json($db, $sql, $sql_all = '', $column_format_fn = NULL) {
		$rst = $db->query($sql . " " . $this->sql_sort_by() . " " . $this->sql_limit()) or die($db->error);
		
		// Find the number of rows we've filtered
		$rstFilterTotal = $db->query('SELECT FOUND_ROWS()') or die($db->error);
		$aResultFilterTotal = $rstFilterTotal->fetch_row();
		
		// Find the total number of rows in the database
		if ($sql_all == '') {
			$totalRecords = $aResultFilterTotal[0];
		} else {
			$rst2 = $db->query($sql_all) or die($db->error);
			$rstTotal = $db->query('SELECT FOUND_ROWS()') or die($db->error);
			$aResultTotal = $rstTotal->fetch_row();
			$totalRecords = $aResultTotal[0];
		}
		// Spit out the JSON results
		$output = '{"sEcho":  '. intval($_GET['sEcho']) . ', "iTotalRecords": ' . $totalRecords . ', "iTotalDisplayRecords": ' . $aResultFilterTotal[0] . ', "aaData": [ ' ."\n";
		while ($aRow = $rst->fetch_row()) {
			$output .= '[';
			for ($i = 0; $i < count($this->column_names); $i++) {
				$val = (is_null($column_format_fn) ? $aRow[$i] : $column_format_fn($aRow, $i));
				$output .= json_encode($val) . ',';
			}
			$output = substr($output, 0, -1);
			$output .= "],\n";
		}
		$output = substr($output, 0, -2);
		$output .= '] }';
		
		return  $output;
	}
	
	
	// *** Protected Methods ***
	// Returns a SORT BY clause, based on inputs from the jquery datatables plugin: $_GETs: iSortCol_#, sSortDir_#
	protected function sql_sort_by() {
		$order = '';
		if (isset($_GET['iSortCol_0'])) {
			$order = 'ORDER BY ';
			for ($i = 0; $i < $_GET['iSortingCols']; $i++) {
				$order .= $this->column_names[$_GET['iSortCol_' . $i]] . " " . $_GET['sSortDir_'.$i] . ',';
			}
			$order = substr($order, 0, -1);
		} else if ($this->default_sort != '') {
			$order = 'ORDER BY ' . $this->default_sort;
		}
		return $order;
	}
	
	protected function sql_limit() {
		return (isset($_GET['iDisplayStart']) ? 'LIMIT ' . $_GET['iDisplayStart'] . ',' . $_GET['iDisplayLength'] : '');
	}
}
?>