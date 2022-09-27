using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingWFMTask.Models;

namespace TrainingWFMTask.Abstractions
{
    public interface IEmployeesService
    {
        Task<IEnumerable<Employeeswithskills>> GetAllEmployees();
    }
}
