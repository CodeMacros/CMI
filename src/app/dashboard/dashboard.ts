import { Component } from '@angular/core';
import { Header } from '../header/header';
import { VerticalMenu } from '../vertical-menu/vertical-menu';
import { CommonModule } from '@angular/common';
import { ApexAxisChartSeries, ApexChart, ApexStroke, ApexXAxis, ApexYAxis, ApexDataLabels, ApexFill, ApexTooltip, ApexMarkers, ApexGrid } from "ng-apexcharts";
import { ChartComponent } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  markers: ApexMarkers;
  grid: ApexGrid;
  // ✅ Add this
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {


  cards = [
    {
      title: "Today's Collection",
      value: "₹ 12.64 Cr",
      image: "assets/images/card-img1.png",
    },
    {
      title: "Cashier Entry",
      value: "524",
      image: "assets/images/card-img2.png",
    },
    {
      title: "Pending Approval",
      value: "21",
      image: "assets/images/card-img3.png",
    },
    {
      title: "Inward Requests",
      value: "18",
      image: "assets/images/card-img4.png",
    },
    {
      title: "Outward Requests",
      value: "9",
      image: "assets/images/card-img5.png",
    }
  ];

  approvalList = [
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN890112',
      id: '87654321',
      customer: 'Priya Sharma',
      amount: '28,000.00',
      mode: 'NEFT',
      created: 'Anita Singh',
      date: '12/10/2001 11:45 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN131456',
      id: '11223344',
      customer: 'Amit Verma',
      amount: '12,850.00',
      mode: 'Card',
      created: 'Rohit Verma',
      date: '12/10/2001 12:33 PM',
      status: 'Pending'
    },
    {
      txn: 'TXN765392',
      id: 'INW12345',
      customer: 'Priya Sharma',
      amount: '5,000.00',
      mode: '-',
      created: 'Amit Kumar',
      date: '12/10/2001 11:45 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN743526',
      id: 'GRP67899',
      customer: 'Amit Verma',
      amount: '45,700.00',
      mode: 'NEFT',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN890112',
      id: '87654321',
      customer: 'Priya Sharma',
      amount: '28,000.00',
      mode: 'NEFT',
      created: 'Anita Singh',
      date: '12/10/2001 11:45 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN131456',
      id: '11223344',
      customer: 'Amit Verma',
      amount: '12,850.00',
      mode: 'Card',
      created: 'Rohit Verma',
      date: '12/10/2001 12:33 PM',
      status: 'Pending'
    },
    {
      txn: 'TXN765392',
      id: 'INW12345',
      customer: 'Priya Sharma',
      amount: '5,000.00',
      mode: '-',
      created: 'Amit Kumar',
      date: '12/10/2001 11:45 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN743526',
      id: 'GRP67899',
      customer: 'Amit Verma',
      amount: '45,700.00',
      mode: 'NEFT',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    },
    {
      txn: 'TXN123456',
      id: '12345678',
      customer: 'Priya Sharma',
      amount: '15,000.00',
      mode: 'Cash',
      created: 'Roopa Anchan',
      date: '12/10/2001 10:42 AM',
      status: 'Pending'
    }
  ];

  // Pagination
  currentPage = 1;
  itemsPerPage = 5;
  showTooltip: any;
  tooltipX: any;
  tooltipY: any;
  tooltipValue: any;

  get totalPages(): number {
    return Math.ceil(this.approvalList.length / this.itemsPerPage);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.approvalList.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // 
  quickActions = [
    {
      title: 'Cashier Entry',
      icon: 'assets/images/tabler_plus.png'
    },
    {
      title: 'Loan Repayment',
      icon: 'assets/images/tabler_moneybag-move-back.png'
    },
    {
      title: 'Renewal Receipt',
      icon: 'assets/images/akar-icons_receipt.png'
    },
    {
      title: 'Group Billing',
      icon: 'assets/images/hugeicons_user-group.png'
    },
    {
      title: 'Inward Entry',
      icon: 'assets/images/mynaui_download.png'
    },
    {
      title: 'Outward Entry',
      icon: 'assets/images/mynaui_upload.png'
    }
  ];

  // Chart start from here
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Collection",
        data: [0.5, 3, 5, 6.2, 6.8, 7.8, 10, 13, 15.2, 17]
      }
    ],

    chart: {
      type: "area",
      height: 180,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },



    // Add this only if your ChartOptions includes `colors`
    colors: ["#2A286A"],

    stroke: {
      curve: "straight",
      width: 2,
      colors: ["#2A286A"],
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#C8DEFF"],
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100]
      }
    },

    markers: {
      size: 3,
      strokeWidth: 2,
      colors: ["#2A286A"],
      strokeColors: "#ffffff",
      hover: {
        size: 6
      }
    },

    dataLabels: {
      enabled: false
    },

    grid: {
      borderColor: "#E8EDF5",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      }
    },

    xaxis: {
      categories: [
        "09:00", "10:00", "11:00", "12:00", "13:00",
        "14:00", "15:00", "16:00", "17:00", "18:00"
      ],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: "#1B314B",
          fontSize: "12px"
        }
      }
    },

    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 4,
      labels: {
        formatter: (val: number) => `${val} Cr`,
        style: {
          colors: "#5A77BB",
          fontSize: "12px"
        }
      }
    },
    // 
    tooltip: {
      enabled: true,
      shared: false,
      intersect: true,
      theme: "dark",
      marker: {
        show: false
      },
      x: {
        show: false
      },
      y: {
        formatter: (val: number): string => `${val} Cr`,
        title: {
          formatter: () => ""
        }
      }
    }

  };

}
