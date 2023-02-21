namespace server.src.Models.dto.structure
{
    public abstract class IDtoResponseBase<T>
    {
        public bool success { get; set; }
        public string message { get; set; }
        public T data { get; set; }
    }
}