using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace angular_asp.net_core_bootcamp.model
{
    public class db_connection : DbContext
    {

        public db_connection(DbContextOptions<db_connection> options) : base(options) { }

        //product table
        public virtual DbSet<product> tbl_product_master { get; set; }

    }
}
