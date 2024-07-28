using AutoMapper;
using WebAPI.DTOs;
using CustomerApi.Entities;

namespace WebAPI.Utils
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Customer, CustomerDTO>().ReverseMap();
        }
    }
}
