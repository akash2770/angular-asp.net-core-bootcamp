﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_asp.net_core_bootcamp.model;
using Microsoft.AspNetCore.Mvc;

namespace angular_asp.net_core_bootcamp.Controllers
{
    [Route("api/[controller]/[action]")] 
    [ApiController]
    public class productController : ControllerBase
    {
        private readonly db_connection con;

        public productController(db_connection con)
        {
            this.con = con;
        }


        [HttpGet]
        public IActionResult list()
        {
            var p_list = con.tbl_product_master.OrderByDescending(x => x.id);
            return Ok(p_list);
        }


        [HttpGet("{id}")]
        public IActionResult view(int id)
        {
            var p_view = con.tbl_product_master.FirstOrDefault(x => x.id == id);
            return Ok(p_view);
        }


        [HttpPost]
        public IActionResult add(product product)
        {
            con.tbl_product_master.Add(product);
            con.SaveChanges();
            return Ok(product);
        }


        [HttpPut]
        public IActionResult update(product product)
        {
            con.tbl_product_master.Update(product);
            con.SaveChanges();
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            con.tbl_product_master.Remove(new product { id = id });
            con.SaveChanges();
            return Ok();
        }

    }
}