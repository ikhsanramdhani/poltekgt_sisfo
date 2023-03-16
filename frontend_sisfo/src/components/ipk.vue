<template>
    <div class="container-fluid">


        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Indeks Prestasi</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <!-- Card IPK -->
        <div class="row mb-4">

            <!-- Earnings (Monthly) Card Example -->
            <!-- <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            KELULUSAN</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-graduation-cap fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

            <!-- Earnings (Monthly) Card Example -->
            <div class="col mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    KUMULATIF</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-medal fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <!-- <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">MAGANG
                        </div>
                        <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-industry fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

            <!-- <div class="col">
                                <div class="progress progress-sm mr-2">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div> -->

            <!-- Pending Requests Card Example -->
            <!-- <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            KEDISIPLINAN</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-heart fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
        </div>

        <!-- Statistik -->
        <!-- <h1 class="h3 mb-4 text-gray-800">Linimasa</h1> -->
        <div class="row">

            <div class="col">

                <!-- Area Chart -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Linimasa IP per semester</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="myAreaChart" style="display: block; height: 160px; width: 429px;" width="643"
                                height="240" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Table -->

                <div class="row">

                    <div class="col-lg">
                        <!-- DataTales Example -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Perincian Nilai</h6>
                            </div>
                            <div class="card-body">
                                <div class="btn-group-sm mb-4" role="group" aria-label="Basic example">
                                    Switch Kolom: <button class="btn btn-info toggle-vis" type="button"
                                        data-column="0">1</button> - <button class="btn btn-info toggle-vis" type="button"
                                        data-column="1">2</button> - <button class="btn btn-info toggle-vis" type="button"
                                        data-column="2">3</button> - <button class="btn btn-info toggle-vis" type="button"
                                        data-column="3">4</button> - <button class="btn btn-info toggle-vis" type="button"
                                        data-column="4">5</button> - <button class="btn btn-info toggle-vis" type="button"
                                        data-column="5">6</button>
                                </div>
                                <div class="table-responsive">

                                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6">
                                                <div class="dataTables_length" id="dataTable_length"><label>Show <select
                                                            name="dataTable_length" aria-controls="dataTable"
                                                            class="custom-select custom-select-sm form-control form-control-sm">
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                        </select> entries</label></div>
                                            </div>
                                            <div class="col-sm-12 col-md-6">
                                                <div id="dataTable_filter" class="dataTables_filter"><label>Search:<input
                                                            type="search" class="form-control form-control-sm"
                                                            placeholder="" aria-controls="dataTable"></label></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <table class="table table-bordered dataTable" id="dataTable" width="100%"
                                                    cellspacing="0" role="grid" aria-describedby="dataTable_info"
                                                    style="width: 100%;">
                                                    <thead>
                                                        <tr role="row">
                                                            <th class="sorting sorting_asc" tabindex="0"
                                                                aria-controls="dataTable" rowspan="1" colspan="1"
                                                                aria-sort="ascending"
                                                                aria-label="TA: activate to sort column descending"
                                                                style="width: 29.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                            <th class="sorting" tabindex="0" aria-controls="dataTable"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Mata Kuliah: activate to sort column ascending"
                                                                style="width: 80.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                            <th class="sorting" tabindex="0" aria-controls="dataTable"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Nilai Akhir: activate to sort column ascending"
                                                                style="width: 69.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                            <th class="sorting" tabindex="0" aria-controls="dataTable"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Indeks: activate to sort column ascending"
                                                                style="width: 36.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                            <th class="sorting" tabindex="0" aria-controls="dataTable"
                                                                rowspan="1" colspan="1"
                                                                aria-label="SKS: activate to sort column ascending"
                                                                style="width: 29.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                            <th class="sorting" tabindex="0" aria-controls="dataTable"
                                                                rowspan="1" colspan="1"
                                                                aria-label="Dosen: activate to sort column ascending"
                                                                style="width: 35.3333px;"><select>
                                                                    <option value=""></option>
                                                                </select></th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th rowspan="1" colspan="1">TA</th>
                                                            <th rowspan="1" colspan="1">Mata Kuliah</th>
                                                            <th rowspan="1" colspan="1">Nilai Akhir</th>
                                                            <th rowspan="1" colspan="1">Indeks</th>
                                                            <th rowspan="1" colspan="1">SKS</th>
                                                            <th rowspan="1" colspan="1">Dosen</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody>
                                                        <tr class="odd">
                                                            <td valign="top" colspan="6" class="dataTables_empty">No data
                                                                available in table</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-5">
                                                <div class="dataTables_info" id="dataTable_info" role="status"
                                                    aria-live="polite">Showing 0 to 0 of 0 entries</div>
                                            </div>
                                            <div class="col-sm-12 col-md-7">
                                                <div class="dataTables_paginate paging_simple_numbers"
                                                    id="dataTable_paginate">
                                                    <ul class="pagination">
                                                        <li class="paginate_button page-item previous disabled"
                                                            id="dataTable_previous"><a href="#" aria-controls="dataTable"
                                                                data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                                        </li>
                                                        <li class="paginate_button page-item next disabled"
                                                            id="dataTable_next"><a href="#" aria-controls="dataTable"
                                                                data-dt-idx="1" tabindex="0" class="page-link">Next</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /.container-fluid -->
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->



    </div>
</template>

<script>
export default {
    name: "IpkCmp"
}
</script>

<style></style>