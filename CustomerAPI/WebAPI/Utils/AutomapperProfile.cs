using AutoMapper;
using WebAPI.DTOs;
using CustomerApi.Entities;

namespace WebAPI.Utils
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Customer, CustomerDTO>()
                .ForMember(x => x.LastUpdateDateTime, opt => opt.MapFrom(src => ((DateTime)src.LastUpdateDateTime).ToShortDateString()))
                .ForMember(x => x.CreatedDateTime, opt => opt.MapFrom(src => ((DateTime)src.CreatedDateTime).ToShortDateString()));
        }
    }
}
